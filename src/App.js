// Using React 16.7 - @next (with HOOKS API)
import React, { useReducer, useEffect } from 'react'
import LeftSection from './components/LeftSection'
import NewsDisplay from './components/news-display/NewsDisplay'
import BottomSection from './components/BottomSection'

import useIsPerformant from './hooks/useIsPerformant'
import useGetItem from './hooks/useGetItem'

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
		const timer = setTimeout(function() {
			window.location.reload(true)
		}, 60 * 60 * 1000)

		return () => clearTimeout(timer)
	}, [])

	useEffect(function() {
		let timer

		window.addEventListener('mousemove', function(e) {
			clearTimeout(timer)
			document.body.classList.add('cursor')

			timer = setTimeout(() => {
				document.body.classList.remove('cursor')
			}, 5 * 1000)
		})

		return () => clearTimeout(timer)
	}, [])

	const itemMeta = useGetItem(store.data.items)
	console.log({ itemMeta })

	return (
		<div className="App">
			<LeftSection
				neverHide={store.performanceMode === 'low'}
				isPerformant={isPerformant}
			/>
			<NewsDisplay config={store.config} itemMeta={itemMeta} />
			<BottomSection hidden={store.performanceMode === 'low'} />
		</div>
	)
}

export default React.memo(App)
