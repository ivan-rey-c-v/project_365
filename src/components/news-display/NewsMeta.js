import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Meta = styled.p`
	font-size: 16px;
	align-self: flex-start;
`

function NewsMeta({ date, author, ...otherProps }) {
	let timeSpan = moment(date).fromNow()
	let authorStr = author ? ` - ${author}` : ''
	let meta = `${timeSpan}${authorStr}`

	return <Meta {...otherProps}>{meta}</Meta>
}

export default React.memo(NewsMeta)
