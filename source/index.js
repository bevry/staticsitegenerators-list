'use strict'

module.exports = {
	get hydrated() {
		return require('../out.json')
	},
	get raw() {
		return require('../list.json')
	}
}
