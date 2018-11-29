import React, { useReducer } from 'react'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import BottomSection from './components/BottomSection'
import useIsPerformant from './hooks/useIsPerformant'

import initialState from './store/initialState'
import StoreReducer from './store/StoreReducer'

function App(props) {
	const isPerformant = useIsPerformant()
	const [store, dispatch] = useReducer(StoreReducer, initialState)

	return (
		<div className="App">
			<LeftSection />
			<RightSection />
			<BottomSection />
		</div>
	)
}

export default React.memo(App)
