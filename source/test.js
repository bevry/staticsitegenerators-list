/* eslint no-console:0 */
'use strict'

const joe = require('joe')
const fs = require('fs')
const path = require('path')
const { equal, deepEqual } = require('assert-helpers')
const { ok } = require('assert')
const fetch = require('node-fetch')
const validSPDX = require('spdx-expression-validate')
const listing = require('./index.js')
const { hydrate } = require('./util.js')

const rawPath = path.resolve(__dirname, '..', 'list.json')
const hydratedPath = path.resolve(__dirname, '..', 'out.json')
const fetchOptions = {
	timeout: 30 * 1000,
	redirect: 'error'
}

function log(...args) {
	if (args[0] === 7 || args[0] === 'debug') return
	console.log.apply(console.log, args)
}

function checkURL(url, next) {
	fetch(url, fetchOptions)
		.then(function(res) {
			if (!res.ok) {
				equal(
					res.status,
					200,
					'response http status code should be 200 success'
				)
				return Promise.reject(new Error('Network response was not ok.'))
			}
		})
		.then(function() {
			return next()
		})
		.catch(function(err) {
			return next(err)
		})
}

joe.suite('static site generators list', function(suite, test) {
	test('raw', function() {
		const { raw } = listing
		equal(Array.isArray(raw), true, 'isArray')
		ok(raw.length, 'has length')
	})

	test('minimum required fields', function() {
		const missingIs = []
		listing.raw.forEach(function(entry) {
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

	test('licenses are valid SPDX', function() {
		listing.raw.forEach(function({ name, license }) {
			if (license) {
				equal(
					validSPDX(license),
					true,
					`${name}: license of ${license} is not a valid SPDX identifier: http://spdx.org/licenses/`
				)
			}
		})
	})

	suite('uris are valid / still exist', function(suite, test) {
		this.setConfig({ concurrency: 30 })
		listing.raw.forEach(function({ name, github, website, testWebsite }) {
			if (github) {
				github = `https://github.com/${github}`
				test(`${name}: http get github: ${github}`, function(done) {
					checkURL(github, done)
				})
			}
			if (website && testWebsite !== false) {
				test(`${name}: http get website: ${website}`, function(done) {
					checkURL(website, done)
				})
			}
		})
	})

	suite('local render', function(suite, test) {
		let result
		test('hydrate local data', function(done) {
			hydrate(listing.raw, { log, corrective: true }, function(err, _result) {
				if (err) return done(err)
				ok(_result.raw, 'raw result was as expected')
				ok(_result.hydrated, 'hydration result was as expected')
				result = _result
				return done()
			})
		})
		test(`writing corrected raw listing ${rawPath}`, function(done) {
			fs.writeFile(rawPath, JSON.stringify(result.raw, null, '  '), done)
		})
		test(`writing hydrated listing to ${hydratedPath}`, function(done) {
			fs.writeFile(
				hydratedPath,
				JSON.stringify(result.hydrated, null, '  '),
				done
			)
		})
		test('raw data was the same as the corrected data', function() {
			const data = JSON.parse(fs.readFileSync(rawPath, 'utf8'))
			deepEqual(
				data,
				result.raw,
				'in the manual listing, there was data that has now been automated, which has been fixed, please run the tests again'
			)
		})
		test('hydrated data was the same as the corrected data', function() {
			deepEqual(listing.hydrated, result.hydrated)
		})
	})
})
