export default function randomItem(items) {
	let randomIndex = Math.floor(Math.random() * items.length)
	let item = items[randomIndex]

	// get item which !== null/undefined
	// may need safeguard against items.every(item => item == null)
	return item || !item.error ? item : randomItem(items)
}
