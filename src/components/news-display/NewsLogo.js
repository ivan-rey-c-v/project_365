import React from 'react'
import styled from 'styled-components'

const LogoImage = styled.img`
	align-self: flex-start;
	margin-bottom: 30px;
	opacity: 0;
	transition: all 300ms;
	animation: fade-in 500ms ease-in forwards;
`

function NewsLogo(props) {
	return <LogoImage {...props} />
}

export default React.memo(NewsLogo)
