module.exports.sort = function sort (data) {
	return data.sort((a, b) => {
		a = a.name.toLowerCase()
		b = b.name.toLowerCase()
		return a <= b ? -1 : (a >= b ? 1 : 0)
	})
}
