const joe = require('joe')
const fs = require('fs')
const {equal} = require('assert-helpers')
const assert = require('assert')
const validSPDX = require('spdx-expression-validate')
const {sort} = require('./util')
const path = './list.json'
const corrective = false

function checkURL (url, next) {
	const http = (/^https/).test(url) ? require('https') : require('http')
	const req = http.get(url, (res) => {
		try {
			equal(res.statusCode, 200, 'response http status code should be 200 success')
		}
		catch (err) {
			return next(err)
		}
		res.destroy()
		return next()
	})
	req.on('error', function (err) {
		req.destroy()
		next(err)
	})
	req.setTimeout(30 * 1000, function () {
		req.destroy('socket timed out')
	})
}

joe.suite('static site generators list', function (suite, test) {
	let data = null

	test('load content', function (done) {
		fs.readFile(path, function (err, blob) {
			if (err)  return done(err)
			try {
				data = JSON.parse(blob.toString())
			}
			catch (err) {
				return done(err)
			}
			return done()
		})
	})

	test('sorted and formatted data', function (done) {
		// sort data via string method
		const sorted = sort(data)
		// convert result into string for comparison
		const source = JSON.stringify(data, null, '  ')
		const result = JSON.stringify(sorted, null, '  ')
		try {
			// compare with stringified version (to ensure same format)
			equal(
				source,
				result,
				'entries are sorted and in the correct format'
			)
		}
		catch (err) {
			if ( !corrective )  return done(err)
			console.log('content was not sorted in the correct format, adjusting for you')
			fs.writeFile(path, result, function (err) {
				if ( err )  return done(err)
				data = sorted
				console.log('all adjusted')
				return done()
			})
		}
		return done()
	})

	test('minimum required fields', function () {
		const missingIs = []
		data.forEach(function (entry) {
			const {name, github, gitlab, bitbucket, website, is} = entry
			const location = (github || gitlab || bitbucket || website)
			assert(name && location, `missing required fields on ${name || location}`)
			if ( !is )  missingIs.push(name)
		})
		console.warn(`The following entries are missing the "is" field, please add what you can if you have time:\n${missingIs.join(', ')}`)
	})

	test('licenses are valid SPDX', function () {
		data.forEach(function ({name, license}) {
			if ( license ) {
				assert(validSPDX(license), `${name}: license of ${license} is not a valid SPDX identifier: http://spdx.org/licenses/`)
			}
		})
	})

	suite('uris are valid / still exist', function (suite, test) {
		this.setConfig({concurrency: 30})
		data.forEach(function ({name, github, website, testWebsite}) {
			if ( github ) {
				github = `https://github.com/${github}`
				test(`${name}: http get github: ${github}`, function (done) {
					checkURL(github, done)
				})
			}
			if ( website && testWebsite !== false ) {
				test(`${name}: http get website: ${website}`, function (done) {
					checkURL(website, done)
				})
			}
		})
	})

	test('render is successful', function (done) {
		require('./render')(done)
	})

})
