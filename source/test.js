/* eslint no-console:0 */
'use strict'

const joe = require('joe')
const fs = require('fs')
const path = require('path')
const { equal, deepEqual } = require('assert-helpers')
const fetch = require('node-fetch')
const validSPDX = require('spdx-expression-validate')
const ssgs = require('./')

const sourcePath = path.resolve(__dirname, '..', 'list.json')
const renderPath = path.resolve(__dirname, '..', 'out.json')
const fetchOptions = {
	timeout: 30 * 1000,
	redirect: 'error'
}

function log (...args) {
	if (args[0] === 7 || args[0] === 'debug') return
	console.log.apply(console.log, args)
}

function checkURL (url, next) {
	fetch(url, fetchOptions).then(function (res) {
		if (!res.ok) {
			equal(res.status, 200, 'response http status code should be 200 success')
			return Promise.reject(
				new Error('Network response was not ok.')
			)
		}
	}).then(function () {
		return next()
	}).catch(function (err) {
		return next(err)
	})
}

joe.suite('static site generators list', function (suite, test) {
	let data = null

	test('load remote content', function (done) {
		ssgs.remote(done)
	})

	test('load local content', function (done) {
		ssgs.local(function (err, result) {
			if (err) return done(err)
			data = result
			return done()
		})
	})

	test('minimum required fields', function () {
		const missingIs = []
		data.forEach(function (entry) {
			const { name, github, gitlab, bitbucket, website, is } = entry
			const location = (github || gitlab || bitbucket || website)
			equal(Boolean(name && location), true, `missing required fields on ${name || location}`)
			if (!is) missingIs.push(name)
		})
		console.warn(`The following entries are missing the "is" field, please add what you can if you have time:\n${missingIs.join(', ')}`)
	})

	test('licenses are valid SPDX', function () {
		data.forEach(function ({ name, license }) {
			if (license) {
				equal(validSPDX(license), true, `${name}: license of ${license} is not a valid SPDX identifier: http://spdx.org/licenses/`)
			}
		})
	})

	suite('uris are valid / still exist', function (suite, test) {
		this.setConfig({ concurrency: 30 })
		data.forEach(function ({ name, github, website, testWebsite }) {
			if (github) {
				github = `https://github.com/${github}`
				test(`${name}: http get github: ${github}`, function (done) {
					checkURL(github, done)
				})
			}
			if (website && testWebsite !== false) {
				test(`${name}: http get website: ${website}`, function (done) {
					checkURL(website, done)
				})
			}
		})
	})

	suite('local render', function (suite, test) {
		let localData, latestLocalData, latestCompleteData
		test('fetch local data', function (done) {
			ssgs.local(function (err, _data) {
				if (err) return done(err)
				localData = _data
				return done()
			})
		})
		test('render local data', function (done) {
			ssgs.render(data, { log, corrective: true }, function (err, _results, _sources) {
				if (err) return done(err)
				latestCompleteData = _results
				latestLocalData = _sources
				return done()
			})
		})
		test(`writing corrected source listing ${sourcePath}`, function (done) {
			fs.writeFile(sourcePath, JSON.stringify(latestLocalData, null, '  '), done)
		})
		test(`writing rendered listing to ${renderPath}`, function (done) {
			fs.writeFile(renderPath, JSON.stringify(latestCompleteData, null, '  '), done)
		})
		test('source data was the same as the corrected data', function () {
			deepEqual(localData, latestLocalData, 'there was automated data written into the manual listing, this has been removed, run the tests again')
		})
	})

	// don't do a remote render, as if remote data is buggered, then tests will always fail
	// if the tests work locally, then are pushed, then the remote data will be fixed
})
