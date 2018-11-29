import React from 'react'
import MainImage from './MainImage'

function LeftSection(props) {
	return (
		<div className="left">
			<MainImage />
		</div>
	)
}

export default React.memo(LeftSection)
