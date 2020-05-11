import kava from 'kava'
import fs from 'fs'
import path from 'path'
import { equal, deepEqual, compare } from 'assert-helpers'
import { ok } from 'assert'
import fetch from 'cross-fetch'
import validSPDX from 'spdx-expression-validate'
import { hydrate, HydrateReturn } from './util'

import rawList from './list'
const rawPath = path.resolve(__dirname, '..', 'raw.json')
const hydratedPath = path.resolve(__dirname, '..', 'hydrated.json')
const fetchOptions: RequestInit = {
	// timeout: 30 * 1000,
	redirect: 'error',
}

function log(logLevel: string | number, ...args: any) {
	if (logLevel === 7 || logLevel === 'debug') return
	console.log.apply(console.log, [logLevel, ...args])
}

async function checkURL(url: string) {
	try {
		const res = await fetch(url, fetchOptions)
		if (!res.ok)
			equal(
				res.status,
				200,
				`response http status code should be 200 success on ${url}`
			)
	} catch (err) {
		return Promise.reject(err)
	}
}

kava.suite('static site generators list', function (suite, test) {
	test('minimum required fields', function () {
		const missingIs: string[] = []
		rawList.forEach(function (entry) {
			const { name, github, gitlab, bitbucket, website, is } = entry
			const location = github || gitlab || bitbucket || website
			equal(
				Boolean(name && location),
				true,
				`missing required fields on ${name || location}`
			)
			if (!is) missingIs.push(name)
		})
		console.warn(
			`The following entries are missing the "is" field, please add what you can if you have time:\n${missingIs.join(
				', '
			)}`
		)
	})

	test('licenses are valid SPDX', function () {
		rawList.forEach(function ({ name, license }) {
			if (license) {
				equal(
					validSPDX(license),
					true,
					`${name}: license of ${license} is not a valid SPDX identifier: http://spdx.org/licenses/`
				)
			}
		})
	})

	suite('uris are valid / still exist', function (suite, test) {
		// @ts-ignore
		this.setConfig({ concurrency: 30 })
		rawList.forEach(function ({ name, github, website, testWebsite }) {
			if (github) {
				github = `https://github.com/${github}`
				test(`${name}: http get github: ${github}`, function (done) {
					checkURL(github as string)
						.then(() => done())
						.catch(done)
				})
			}
			if (website && testWebsite !== false) {
				test(`${name}: http get website: ${website}`, function (done) {
					checkURL(website)
						.then(() => done())
						.catch(done)
				})
			}
		})
	})

	suite('local render', function (suite, test) {
		let result: HydrateReturn

		test('hydrate local data', function (done) {
			hydrate(rawList, { log, corrective: true })
				.then(function (_result) {
					ok(_result.raw, 'raw result was as expected')
					ok(_result.hydrated, 'hydration result was as expected')
					result = _result
					done()
				})
				.catch(done)
		})

		test(`writing corrected raw listing ${rawPath}`, function (done) {
			fs.writeFile(
				rawPath,
				JSON.stringify(result.raw, null, '  '),
				// @ts-ignore
				done
			)
		})

		test(`writing hydrated listing to ${hydratedPath}`, function (done) {
			fs.writeFile(
				hydratedPath,
				JSON.stringify(result.hydrated, null, '  '),
				// @ts-ignore
				done
			)
		})

		test('raw data was the same as the corrected data', function () {
			try {
				deepEqual(rawList, result.raw)
			} catch (err) {
				console.warn(
					'there are fields within source/list.ts that can be truncated as they are now automated, please apply the relevant changes'
				)
			}
		})
	})
})
