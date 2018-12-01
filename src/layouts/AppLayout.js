import React from 'react'
import styled from 'styled-components'

const Layout = styled.main`
	height: 100vh;
	width: 100vw;
	display: flex;
	background-color: gray;
`

function AppLayout({ children, ...props }) {
	return <Layout {...props}>{children}</Layout>
}

export default React.memo(AppLayout)
