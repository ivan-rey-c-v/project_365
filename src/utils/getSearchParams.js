function getSearchParam(key) {
	let val = false
	const keyExist = window.location.search.indexOf(key) !== -1
	if (keyExist) {
		val = window.location.search.split(key + '=')[1]
	}

	if (val && val.indexOf('&') !== -1) val = val.split('&')[0]

	console.log('search param', val)
	return val
}

export default getSearchParam
