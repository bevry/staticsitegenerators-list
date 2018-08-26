'use strict'

const {init} = require('cmints')
const {runServer, generateStatic} = require('cmints/lib/server')
const argv = require('minimist')(process.argv.slice(2))

init(() => {
	if (argv.static) {
		generateStatic(process.exit)
	}
	else if (argv.server) {
		runServer(argv)
	}
	else {
		console.log(`
      To launch server: npm run test-launch-server
      To launch static: npm run test-generate-site
    `)
	}
})
