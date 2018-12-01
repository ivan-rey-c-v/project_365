import React from 'react'
import styled from 'styled-components'

const Layout = styled.section`
	height: 100%;
	width: 40%;
	padding: 30px;
	margin-bottom: 30px;
	color: ${props => (props.color ? props.color : 'inherit')};
	background-color: ${props => (props.bg ? props.bg : 'inherit')};

	overflow: hidden;

	/* transition-group creates a <div> */
	> .transition-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

function NewsDisplayLayout({ children, ...props }) {
	return <Layout {...props}>{children}</Layout>
}

export default React.memo(NewsDisplayLayout)
