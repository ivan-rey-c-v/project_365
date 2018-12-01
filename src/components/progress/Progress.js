import React from 'react'
import styled from 'styled-components'

import LoadingBar from './LoadingBar'

const Container = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6px;
`

function ProgressBar(props) {
	console.log('rendering progress bar...')
	const { title = '' } = props.item.meta
	return (
		<Container>
			{/* <CSSTransition
				appear
				key={title}
				timeout={15000}
				classNames="progress"
				unmountOnExit
			> */}
			<LoadingBar key={title} />
			{/* </CSSTransition> */}
		</Container>
	)
}

export default React.memo(ProgressBar)
