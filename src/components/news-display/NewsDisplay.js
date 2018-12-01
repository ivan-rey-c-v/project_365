import React from 'react'
import styled from 'styled-components'

import NewsLogo from './NewsLogo'
import NewsTitle from './NewsTitle'
import NewsDesc from './NewsDesc'
import NewsMeta from './NewsMeta'

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 30px;
	color: ${props => (props.color ? props.color : 'inherit')};
	background-color: ${props => (props.bg ? props.bg : 'inherit')};

	overflow: hidden;
	display: flex;
	flex-direction: column;
	opacity: 0;
	transform-origin: 100% 100%;
	transition: all 300ms;
	animation: slide-left 500ms ease-in-out forwards;
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

	console.log('rendering news display...')

	return (
		<Container bg={bg} color={color}>
			<NewsLogo src={logo} alt="logo" height={height} key={logo} />
			<NewsTitle title={title} key={title} />
			<NewsDesc description={description} key={description} />
			<NewsMeta author={author} date={date} key={`${date}-${author}`} />
		</Container>
	)
}

export default React.memo(NewsDisplay)
