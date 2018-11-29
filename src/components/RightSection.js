import React from 'react'

function RightSection(props) {
	return (
		<div className="right">
			<div className="inner">
				<img src="" alt="logo" className="logo fadeItem" />
				<h1 className="title fadeItem" />
				<p className="desc fadeItem" />
				<p className="meta small fadeItem" />
			</div>
		</div>
	)
}

export default React.memo(RightSection)
