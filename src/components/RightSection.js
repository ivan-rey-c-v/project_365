import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'

const Container = styled.div`
	height: 100%;
	width: 40%;
	padding: 30px;
	margin-bottom: 30px;
	color: ${props => (props.color ? props.color : 'inherit')};
	background-color: ${props => (props.bg ? props.bg : 'inherit')};

	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`
const LogoImage = styled.img`
	align-self: flex-start;
	margin-bottom: 30px;
`
const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 30px;
	opacity: 0;
	animation: fade-in 2000ms ease-in-out forwards;
`
const Desc = styled.p`
	line-height: 1.5;
	font-size: 24px;
	margin-bottom: 30px;
`
const Meta = styled.p`
	font-size: 16px;
	align-self: flex-start;
`

function RightSection(props) {
	const { bg = '', logo = '', color = '', height = '' } = props.config
	const {
		author = '',
		date = '',
		description = '',
		img = '',
		title = ''
	} = props.itemMeta

	const defaultStyle = {
		transition: `opacity 1000ms ease-in-out`,
		opacity: 0
	}

	const transitionStyles = {
		entering: { opacity: 0 },
		entered: { opacity: 1 }
	}

	return (
		<Container bg={bg} color={color}>
			<LogoImage src={logo} alt="logo" height={height} />

			<Transition in={props.itemMeta.title !== ''} timeout={1000}>
				{state => {
					console.log({ state })
					return (
						<Title
							style={{
								...defaultStyle,
								...transitionStyles[state]
							}}
						>
							{title}
						</Title>
					)
				}}
			</Transition>

			<Desc>
				{description.length > 400
					? `${description.substring(0, 400)}...`
					: description}
			</Desc>
			<Meta className="meta small #fadeItem">
				{`${moment(date).fromNow()}${author && ` - ${author}`} `}
			</Meta>
		</Container>
	)
}

export default React.memo(RightSection)
