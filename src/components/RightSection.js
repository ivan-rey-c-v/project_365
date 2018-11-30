import React from 'react'

function RightSection(props) {
	const { bg = '', logo = '', color = '', height = '' } = props.config
	const {
		author = '',
		date = '',
		description = '',
		img = '',
		title = ''
	} = props.itemMeta

	const dateString = ''

	console.log({ bg, logo, author, date, description, img, title })

	return (
		<div className="right" style={{ backgroundColor: bg ? bg : 'inherit' }}>
			<div className="inner" style={{ color: color ? color : 'inherit' }}>
				<img
					src={img}
					alt="logo"
					className={`logo #fadeItem  ${props.config && '#hidden'}`}
					height={height}
				/>
				<h1 className="title #fadeItem">{title}</h1>
				<p className="desc #fadeItem">{description}</p>
				<p className="meta small #fadeItem">
					<i className="wi wi-time-2" />
					{`${dateString}${author && ` - ${author}`} `}
				</p>
			</div>
		</div>
	)
}

export default React.memo(RightSection)
