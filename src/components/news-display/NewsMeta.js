import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Meta = styled.p`
	font-size: 16px;
	align-self: flex-start;
	opacity: 0;
	transition: all 300ms;
	animation: fade-in 1000ms ease-in 2000ms forwards;
`

function NewsMeta({ date, author, ...otherProps }) {
	let timeSpan = moment(date).fromNow()
	let authorStr = author ? ` - ${author}` : ''
	let meta = `${timeSpan}${authorStr}`

	return <Meta {...otherProps}>{meta}</Meta>
}

export default React.memo(NewsMeta)
