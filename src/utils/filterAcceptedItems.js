export default function filterAcceptedItems(items) {
	return items.filter(item => {
		if (
			!item ||
			item.error ||
			!item.meta.title ||
			item.meta.title.includes('CNN Video')
		) {
			return false
		}

		let thumbnail = item.links && item.links.thumbnail
		let image =
			thumbnail && thumbnail.length && thumbnail[0].href
				? thumbnail[0].href
				: null

		if (!image) return false

		return true
	})
}
