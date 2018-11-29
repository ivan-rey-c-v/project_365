import React, { useState, useEffect } from 'react'
import randomItem from '../utils/randomItem'

function useGetItem(items) {
	const [itemMeta, setItemMeta] = useState(null)

	useEffect(function() {
		if (items) {
			function getItem() {
				const item = randomItem(items)

				let thumbnail = item.links && item.links.thumbnail
				let img =
					thumbnail.length && thumbnail[0].href
						? thumbnail[0].href
						: ''
				let {
					description = '',
					title = '',
					date = '',
					author = ''
				} = item.meta

				description =
					description.length > 400
						? `${description.substring(0, 400)}...`
						: description

				if (title.includes('CNN Video')) return getItem()
				if (!img || !title) return getItem()

				setItemMeta({
					img,
					description,
					title,
					date,
					author
				})
			}
		}

		const timer = setInterval(getItem, 15 * 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return itemMeta
}

export default useGetItem
