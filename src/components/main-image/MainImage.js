import React, { useRef } from 'react'
import styled from 'styled-components'
import Image from './Image'

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;

	/* temporary fix */
	display: flex;
	align-items: center;
	justify-content: center;
`

function MainImage(props) {
	const containerRef = useRef(null)
	const [thumbnail] = props.item.links.thumbnail
	const href = thumbnail.href

	return (
		<Container ref={containerRef}>
			<Image
				href={href}
				isPerformant={props.isPerformant}
				containerRef={containerRef}
			/>
		</Container>
	)
}

export default React.memo(MainImage)
