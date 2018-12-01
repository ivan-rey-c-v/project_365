import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 30px;
	opacity: 0;
	transition: all 300ms;
	animation: fade-in 1000ms ease-in 200ms forwards;
`

function NewsTitle({ title, ...otherProps }) {
	return <Title {...otherProps}> {title} </Title>
}

export default React.memo(NewsTitle)
