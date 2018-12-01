import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import NewsLogo from './NewsLogo'
import NewsTitle from './NewsTitle'
import NewsDesc from './NewsDesc'
import NewsMeta from './NewsMeta'

// TransitionGroup creates a div
// use TransitionGroup as a container
const StyledTransitionGroup = styled(TransitionGroup)`
	height: 100%;
	width: 100%;
	padding: 30px;
	color: ${props => (props.color ? props.color : 'inherit')};
	background-color: ${props => (props.bg ? props.bg : 'inherit')};

	overflow: hidden;

	display: flex;
	flex-direction: column;
`

function NewsDisplay(props) {
	const { bg = '', logo = '', color = '', height = '' } = props.config
	const {
		author = '',
		date = '',
		description = '',
		// use img in left-section
		img = '',
		title = ''
	} = props.item.meta

	return (
		<StyledTransitionGroup bg={bg} color={color}>
			<NewsLogo src={logo} alt="logo" height={height} />
			<CSSTransition
				key={title}
				timeout={500}
				classNames="fade"
				unmountOnExit
			>
				<NewsTitle title={title} />
			</CSSTransition>
			<CSSTransition
				key={description}
				timeout={{
					enter: 300,
					exit: 2000
				}}
				classNames="fade"
				unmountOnExit
			>
				<NewsDesc description={description} />
			</CSSTransition>
			<NewsMeta author={author} date={date} />
		</StyledTransitionGroup>
	)
}

export default React.memo(NewsDisplay)
