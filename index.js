const fs = require('fs')
const extractOpts = require('extract-opts')

/* eslint camelcase:0 */
module.exports.render = function render (opts, next) {
	[opts, next] = extractOpts(opts, next)
	if ( opts.corrective == null )  opts.corrective = false
	if ( opts.cache == null )  opts.cache = 1000 * 60 * 60 * 24  // one day

	const extendr = require('extendr')
	const arrangekeys = require('arrangekeys')
	const {sourcePath, sort, keyorder} = require('./util')

	const sourceMap = {}
	const resultMap = {}
	const githubRepos = []
	require(sourcePath).forEach(function (entry, index) {
		const key = entry.github && entry.github.toLowerCase() || index
		resultMap[key] = extendr.clone(arrangekeys(entry, keyorder))
		sourceMap[key] =  extendr.clone(resultMap[key])
		if ( entry.github ) {
			githubRepos.push(entry.github)
		}
	})

	// Enhance with github data
	if ( opts.log )  opts.log('info', `Fetching the github information, all ${githubRepos.length} of them`)
	require('getrepos').create(opts).fetchRepos(githubRepos, function (err, repos) {
		if (err)  return next(err)

		// Prepare the proejcts with the github data
		repos.forEach(function (github) {
			const key = github.full_name.toLowerCase()

			// Confirm existance as name may have changed from the listing, for example a repo rename
			if ( sourceMap[key] == null ) {
				if ( opts.log )  opts.log('warn', `${github.full_name} is missing, likely due to rename`)
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
					if ( opts.corrective && source[key] && result[key] && source[key].toLowerCase() === result[key].toLowerCase() ) {
						if ( opts.log )  opts.log('note', `trimming ${key} on ${github.full_name} as it is the same as the github data`)
						delete source[key]
					}
					if ( result[key] == null ) {
						if ( opts.log )  opts.log('info', `added ${key} on ${github.full_name} from the github data`)
						result[key] = value
					}
				}
			})

			resultMap[key] = arrangekeys(result, keyorder)
		})

		return next(null, sort(Object.values(resultMap)), sort(Object.values(sourceMap)))
	})
}

module.exports.source = function source (opts, next) {
	[opts, next] = extractOpts(opts, next)
	const {sourcePath} = require('./util')
	fs.readFile(sourcePath, function (err, blob) {
		let data = null
		if (err)  return next(err)
		try {
			data = JSON.parse(blob.toString())
		}
		catch (err) {
			return next(err)
		}
		return next(null, data)
	})
}
