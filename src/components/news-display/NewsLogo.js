import React from 'react'
import styled from 'styled-components'

const LogoImage = styled.img`
	align-self: flex-start;
	margin-bottom: 30px;
`

function NewsLogo(props) {
	return <LogoImage {...props} />
}

export default React.memo(NewsLogo)
