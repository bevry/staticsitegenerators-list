/* eslint camelcase:0 */
'use strict'

// Imports
const extractOpts = require('extract-opts')

// Trim redundant data from the listing
module.exports.render = function render (data, opts, next) {
	[opts, next] = extractOpts(opts, next)
	if (opts.corrective == null) opts.corrective = false
	if (opts.cache == null) opts.cache = 1000 * 60 * 60 * 24  // one day

	const extendr = require('extendr')
	const arrangekeys = require('arrangekeys')
	const { sort, keyorder } = require('./util')

	const sourceMap = {}
	const resultMap = {}
	const githubRepos = []
	data.forEach(function (entry, index) {
		const key = (entry.github && entry.github.toLowerCase()) || index
		sourceMap[key] = extendr.clone(arrangekeys(entry, keyorder))
		resultMap[key] = extendr.clone(arrangekeys(entry, keyorder))
		if (entry.github) {
			githubRepos.push(entry.github)
		}
	})

	// Enhance with github data
	if (opts.log) opts.log('info', `Fetching the github information, all ${githubRepos.length} of them`)
	require('getrepos').create(opts).fetchRepos(githubRepos, function (err, repos) {
		if (err) return next(err)

		// Prepare the projects with the github data
		repos.forEach(function (github) {
			const key = github.full_name.toLowerCase()

			// Confirm existance as name may have changed from the listing, for example a repo rename
			if (sourceMap[key] == null) {
				if (opts.log) opts.log('warn', `${github.full_name} is missing, likely due to rename`)
				return  // skip
			}

			// Prepare
			const source = sourceMap[key]
			const result = resultMap[key]

			// Apply github fields
			const fields = {
				description: github.description,
				language: github.language,
				license: github.license && github.license.key,
				website: github.homepage && github.homepage.toLowerCase().indexOf(`github.com/${key}`) === -1 && github.homepage,
				stars: github.stargazers_count,
				watchers: github.watchers_count,
				forks: github.forks_count,
				created_at: github.created_at,
				updated_at: github.updated_at
			}
			Object.keys(fields).forEach(function (key) {
				const value = fields[key]
				if (value) {
					if (opts.corrective && source[key] && value && source[key].toLowerCase() === value.toLowerCase()) {
						if (opts.log) opts.log('note', `trimming ${key} on ${github.full_name} as it is the same as the github data: ${value}`)
						delete source[key]
					}
					if (result[key] == null) {
						if (opts.log) opts.log('info', `added ${key} on ${github.full_name} from the github data`)
						result[key] = value
					}
				}
			})

			resultMap[key] = arrangekeys(result, keyorder)
		})

		return next(null, sort(Object.values(resultMap)), sort(Object.values(sourceMap)))
	})
}

module.exports.remote = function remote (opts, next) {
	[opts, next] = extractOpts(opts, next)
	require('node-fetch')('https://raw.githubusercontent.com/bevry/staticsitegenerators-list/master/list.json')
		.then(function (response) {
			return response.json()
		})
		.then(function (json) {
			next(null, json)
		})
		.catch(function (err) {
			next(err)
		})
}

module.exports.local = function local (opts, next) {
	[opts, next] = extractOpts(opts, next)
	let data = null
	try {
		data = require('../list.json')
	}
	catch (err) {
		return next(err)
	}
	return next(null, data)
}
