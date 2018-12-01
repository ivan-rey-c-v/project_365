// Using React 16.7 - @next (with HOOKS API)
import React, { useState, useReducer, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import AppLayout from './layouts/AppLayout'
import RightSectionLayout from './layouts/RightSectionLayout'
import LeftSectionLayout from './layouts/LeftSectionLayout'
import ProgressLayout from './layouts/ProgressLayout'

import MainImage from './components/MainImage'
import NewsDisplay from './components/news-display/NewsDisplay'
import ProgressBar from './components/ProgressBar'

import useIsPerformant from './hooks/useIsPerformant'
import setRandomIndex from './utils/setRandomIndex'

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

	const [currentItemIndex, setCurrentItemIndex] = useState(0)
	useEffect(
		function() {
			if (store.data.items) {
				const duration = 15 * 1000
				const max = store.data.items.length
				const changeItemTimeout = setTimeout(() => {
					const newIndex = setRandomIndex(0, max, currentItemIndex)
					setCurrentItemIndex(newIndex)
					// set new item
					dispatch({ type: 'SET_ITEM', index: newIndex })
				}, duration)

				return () => clearTimeout(changeItemTimeout)
			}
		},
		[currentItemIndex]
	)

	return (
		<AppLayout>
			<LeftSectionLayout>
				{store.currentItem && (
					<MainImage
						neverHide={store.performanceMode === 'low'}
						isPerformant={isPerformant}
					/>
				)}
			</LeftSectionLayout>

			<RightSectionLayout>
				{store.currentItem && (
					<CSSTransition
						in={true}
						key={currentIndex}
						timeout={500}
						classNames="slide-fade"
					>
						<NewsDisplay
							config={store.config}
							item={store.currentItem}
						/>
					</CSSTransition>
				)}
			</RightSectionLayout>

			<ProgressLayout>
				{store.currentItem && (
					<CSSTransition
						key={currentIndex}
						timeout={15000}
						classNames="progress"
					>
						<ProgressBar />
					</CSSTransition>
				)}
			</ProgressLayout>
		</AppLayout>
	)
}

export default React.memo(App)
