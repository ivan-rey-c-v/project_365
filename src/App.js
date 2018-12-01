// Using React 16.7 - @next (with HOOKS API)
import React, { useReducer, useEffect } from 'react'

import AppLayout from './layouts/AppLayout'
import RightSectionLayout from './layouts/RightSectionLayout'
import LeftSectionLayout from './layouts/LeftSectionLayout'

import MainImage from './components/main-image/MainImage'
import NewsDisplay from './components/news-display/NewsDisplay'
import Progress from './components/progress/Progress'

import useIsPerformant from './hooks/useIsPerformant'

import initialState from './store/initialState'
import StoreReducer from './store/StoreReducer'

function App(props) {
	const isPerformant = useIsPerformant()
	const [store, dispatch] = useReducer(StoreReducer, initialState, {
		// initial action
		type: 'SEARCH_PARAM',
		param: 'cat'
	})

	useEffect(function() {
		const url = 'https://news.meetingroom365.com'
		const api = `/rss${window.location.search}`
		fetch(`${url}${api}`)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: 'SET_DATA',
					data
				})
			})
			.catch(error => console.log(error))
	}, [])

	useEffect(function() {
		const reloadPageTimeout = setTimeout(function() {
			window.location.reload(true)
		}, 60 * 60 * 1000)

		return () => clearTimeout(reloadPageTimeout)
	}, [])

	useEffect(function() {
		let removeBodyCursorTimeout
		window.addEventListener('mousemove', function(e) {
			clearTimeout(removeBodyCursorTimeout)
			document.body.classList.add('cursor')

			removeBodyCursorTimeout = setTimeout(() => {
				document.body.classList.remove('cursor')
			}, 5 * 1000)
		})

		return () => clearTimeout(removeBodyCursorTimeout)
	}, [])

	useEffect(function() {
		if (store.currentItemIndex) {
			console.log('start timeout for new item...')
			const duration = 15 * 1000
			const changeItemTimeout = setTimeout(() => {
				dispatch({ type: 'SET_NEW_ITEM' })
			}, duration)

			return () => clearTimeout(changeItemTimeout)
		}
	})

	return (
		<AppLayout>
			<LeftSectionLayout>
				{store.currentItem && (
					<MainImage
						neverHide={store.performanceMode === 'low'}
						isPerformant={isPerformant}
						item={store.currentItem}
					/>
				)}
			</LeftSectionLayout>

			<RightSectionLayout>
				{store.currentItem && (
					<NewsDisplay
						config={store.config}
						item={store.currentItem}
					/>
				)}
			</RightSectionLayout>

			{store.currentItem && <Progress item={store.currentItem} />}
		</AppLayout>
	)
}

export default React.memo(App)
