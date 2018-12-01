import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6px;
`

function ProgressLayout({ children, ...props }) {
	return <Layout {...props}>{children}</Layout>
}

export default React.memo(ProgressLayout)
