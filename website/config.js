'use strict'

const fs = require('fs')
const listing = JSON.parse(fs.readFileSync('out.json', 'utf8'))
const moment = require('moment')
const websiteVersion = require('../package.json').version

const templateData =
{
	listing,

	// Moment
	moment,

	// Specify some site properties
	site: {
		// The production url of our website
		url: 'https://staticsitegenerators.net',

		// The default title of our website
		title: 'Static Site Generators',

		// The website description (for SEO)
		description: 'The definitive listing of Static Site Generators',

		// The website keywords (for SEO) separated by commas
		keywords: ['static site generator', 'static site', 'static', 'site', 'web site', 'web app', 'app', 'application', 'web application', 'seo', 'search engine optimisation', 'fast', 'flat file', 'cms', 'content management system', 'nosql', 'node.js', 'ruby', 'javascript', 'python'],

		// The website's styles
		styles: [
			'/vendor/normalize.css',
			'/css/style.css'
		].map((url) => `${url}?websiteVersion=${websiteVersion}`),

		// The website's scripts
		scripts: [
			'/vendor/sorttable.js',
			'/scripts/script.js'
		].map((url) => `${url}?websiteVersion=${websiteVersion}`),

		services: {
			githubStarButton: 'bevry/staticsitegenerators'
		}
	}
}

module.exports = {templateData}
