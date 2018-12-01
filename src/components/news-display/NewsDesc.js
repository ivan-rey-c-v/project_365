import React from 'react'
import styled from 'styled-components'

const Desc = styled.p`
	line-height: 1.5;
	font-size: 24px;
	margin-bottom: 30px;
	opacity: 0;
	transition: all 300ms;
	animation: fade-in 1000ms ease-in 1200ms forwards;
`

function NewsDescription({ description, ...otherProps }) {
	if (description.length > 400) {
		description = `${description.substring(0, 400)}...`
	}

	return <Desc {...otherProps}>{description}</Desc>
}

export default React.memo(NewsDescription)
