// Using React 16.7 - @next (with HOOKS API)
import React, { useReducer, useEffect } from 'react'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
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

	const itemMeta = useGetItem(store.data.items)

	useEffect(function() {
		const url = '/rss' // + location.search
		fetch(url)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: 'SET_DATA',
					data
				})
			})
			.catch(error => console.log(error))
	}, [])

	// get item effect

	return (
		<div className="App">
			<LeftSection />
			<RightSection config={store.config} itemMeta={itemMeta} />
			<BottomSection />
		</div>
	)
}

export default React.memo(App)
