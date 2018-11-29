import React, { Component } from 'react'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import BottomSection from './components/BottomSection'

class App extends Component {
	render() {
		return (
			<div className="App">
				<LeftSection />
				<RightSection />
				<BottomSection />
			</div>
		)
	}
}

export default App
