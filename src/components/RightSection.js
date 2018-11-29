import React from 'react'

function RightSection(props) {
	const { color, height, background, src } = props.config
	const { img, description, title, date, author } = props.itemMeta

	const dateString = ''

	return (
		<div className="right" style={background && { background }}>
			<div className="inner" style={color && { color }}>
				<img
					src={src && src}
					alt="logo"
					className={`logo fadeItem  ${props.config && 'hidden'}`}
					height={height && height}
				/>
				{title && <h1 className="title fadeItem">{title}</h1>}
				{description && <p className="desc fadeItem">{description}</p>}
				<p className="meta small fadeItem">
					<i className="wi wi-time-2" />
					{dateString && `${dateString}${author && ` - ${author}`} `}
				</p>
			</div>
		</div>
	)
}

export default React.memo(RightSection)
