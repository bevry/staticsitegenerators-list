'use strict'

module.exports.keyorder = 'name github gitlab bitbucket website license language description created_at updated_at abandoned is extensible stars forks watchers'

module.exports.sort = function sort (data) {
	return data.sort((a, b) => {
		a = a.name.toLowerCase()
		b = b.name.toLowerCase()
		return a <= b ? -1 : (a >= b ? 1 : 0)
	})
}
