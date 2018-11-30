import React from 'react'
import MainImage from './MainImage'
import styled from 'styled-components'

const Container = styled.div`
	height: 100%;
	width: 60%;
	background-color: lightblue;
`

function LeftSection(props) {
	return (
		<Container>
			<MainImage isPerformant={props.isPerformant} />
		</Container>
	)
}

export default React.memo(LeftSection)
