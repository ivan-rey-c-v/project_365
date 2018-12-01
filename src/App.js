// Using React 16.7 - @next (with HOOKS API)
import React, { useReducer, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import RightSectionLayout from './layouts/RightSectionLayout'
import LeftSectionLayout from './layouts/LeftSectionLayout'
import ProgressLayout from './layouts/ProgressLayout'

import MainImage from './components/MainImage'
import NewsDisplay from './components/news-display/NewsDisplay'
import ProgressBar from './components/ProgressBar'

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
			<LeftSectionLayout>
				<MainImage
					neverHide={store.performanceMode === 'low'}
					isPerformant={isPerformant}
				/>
			</LeftSectionLayout>

			<RightSectionLayout>
				<CSSTransition>
					<NewsDisplay config={store.config} itemMeta={itemMeta} />
				</CSSTransition>
			</RightSectionLayout>

			<ProgressLayout>
				<ProgressBar />
			</ProgressLayout>
		</div>
	)
}

export default React.memo(App)
