import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

const StyledTransitionGroup = styled(TransitionGroup)`
	position: fixed;
	bottom: 0;
	height: 6px;
	width: 100%;
`
const Progress = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	transform-origin: 0 0;
`

function LoadingBar(props) {
	console.log('rendering progress bar...')
	return (
		<StyledTransitionGroup>
			<CSSTransition
				in={true}
				key={props.itemMeta}
				timeout={15000}
				classNames="progress"
				unmountOnExit
			>
				<Progress />
			</CSSTransition>
		</StyledTransitionGroup>
	)
}

export default React.memo(LoadingBar)
