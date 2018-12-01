function setRandomIndex(min, max, exemptedList = []) {
	//The maximum is exclusive and the minimum is inclusive
	min = Math.ceil(min)
	max = Math.floor(max)
	let number = Math.floor(Math.random() * (max - min)) + min

	if (exemptedList.includes(number)) {
		return setRandomIndex(min, max, exemptedList)
	}

	return number
}

export default setRandomIndex
