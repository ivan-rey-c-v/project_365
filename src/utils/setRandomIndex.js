export function setRandomIndex(min, max, ...exempted) {
	//The maximum is exclusive and the minimum is inclusive
	min = Math.ceil(min)
	max = Math.floor(max)
	let number = Math.floor(Math.random() * (max - min)) + min

	if (exempted.includes(number)) {
		return setRandomIndex(min, max, ...exempted)
	}

	return number
}
