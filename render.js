/* eslint camelcase:0 */
const fs = require('fs')
const extractOpts = require('extract-opts')
const extendr = require('extendr')
const arrangekeys = require('arrangekeys')
const {sort} = require('./util')
const path = './list.json'
const keyorder = 'name github gitlab bitbucket website license language description created_at updated_at is extensible stars forks watchers'

module.exports = function renderStaticSiteGeneratorsListing (opts, next) {
	[opts, next] = extractOpts(opts, next)
	if ( opts.log == null )  opts.log = console.log
	if ( opts.cache == null )  opts.cache = 1000 * 60 * 60 * 24  // one day

	const sourceMap = {}
	const resultMap = {}
	const githubRepos = []
	require(path).forEach(function (entry, index) {
		const key = entry.github && entry.github.toLowerCase() || index
		sourceMap[key] = arrangekeys(entry, keyorder)
		resultMap[key] = extendr.clone(sourceMap[key])
		if ( entry.github ) {
			githubRepos.push(entry.github)
		}
	})

	// Enhance with github data
	opts.log('info', `Fetching the github information, all ${githubRepos.length} of them`)
	require('getrepos').create(opts).fetchRepos(githubRepos, function (err, repos) {
		if (err)  return next(err)

		// Prepare the proejcts with the github data
		repos.forEach(function (github) {
			const key = github.full_name.toLowerCase()

			// Confirm existance as name may have changed from the listing, for example a repo rename
			if ( sourceMap[key] == null ) {
				opts.log('warn', `${github.full_name} is missing, likely due to rename`)
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
				website: github.homepage && github.homepage.toLowerCase().indexOf(`github.com/${key}`) !== -1 && github.homepage,
				stars: github.stargazers_count,
				watchers: github.watchers_count,
				forks: github.forks_count,
				created_at: github.created_at,
				updated_at: github.updated_at
			}
			Object.keys(fields).forEach(function (key) {
				const value = fields[key]
				if ( value ) {
					if ( source[key] && result[key] && source[key].toLowerCase() === result[key].toLowerCase() ) {
						opts.log('note', `trimming ${key} on ${github.full_name} as it is the same as the github data`)
						delete source[key]
					}
					else if ( result[key] == null ) {
						opts.log('info', `added ${key} on ${github.full_name} from the github data`)
						result[key] = value
					}
				}
			})

			resultMap[key] = arrangekeys(result, keyorder)
		})

		// write the updated source and result data
		fs.writeFile(path, JSON.stringify(sort(Object.values(sourceMap)), null, '  '), function (err) {
			if (err)  return next(err)
			fs.writeFile('./out.json', JSON.stringify(sort(Object.values(resultMap)), null, '  '), function (err) {
				if (err)  return next(err)
				return next()
			})
		})
	})
}
