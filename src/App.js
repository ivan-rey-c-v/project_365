import React from 'react'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import BottomSection from './components/BottomSection'
import useIsPerformant from './hooks/useIsPerformant'

function App(props) {
	const isPerformant = useIsPerformant()

	return (
		<div className="App">
			<LeftSection />
			<RightSection />
			<BottomSection />
		</div>
	)
}

export default React.memo(App)
