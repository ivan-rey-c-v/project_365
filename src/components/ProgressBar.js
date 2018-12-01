import React from 'react'
import styled from 'styled-components'

const Progress = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	transform-origin: 0 0;
`

function ProgressBar(props) {
	console.log('rendering progress bar...')
	return <Progress />
}

export default React.memo(ProgressBar)
