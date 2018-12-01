import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	height: 100%;
	width: 40%;
`

function RightSectionLayout({ children, ...props }) {
	return <Section {...props}>{children}</Section>
}

export default React.memo(RightSectionLayout)
