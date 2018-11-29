function getSearchParam(key) {
	let val = false
	const keyExist = location.search.indexOf(key) !== -1
	if (keyExist) {
		val = location.search.split(key + '=')[1]
	}

	if (val && val.indexOf('&') !== -1) val = val.split('&')[0]
	return val
}

export default getSearchParam
