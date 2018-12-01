import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`

function MainImage(props) {
	const [thumbnail] = props.item.links.thumbnail
	const href = thumbnail.href

	return (
		<Container>
			<Image href={href} isPerformant={props.isPerformant} />
		</Container>
	)
}

export default React.memo(MainImage)
