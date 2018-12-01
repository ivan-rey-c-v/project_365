import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	transform-origin: 0 0;
	opacity: 0;
	animation: progress 15000ms linear forwards;

	@keyframes progress {
		from {
			opacity: 1;
			transform: scaleX(0);
		}
		to {
			opacity: 1;
			transform: scaleX(1);
		}
	}
`

function LoadingBar(props) {
	return <Bar {...props} />
}

export default React.memo(LoadingBar)
