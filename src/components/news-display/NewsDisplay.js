import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import NewsDisplayLayout from './NewsDisplayLayout'
import NewsLogo from './NewsLogo'
import NewsTitle from './NewsTitle'
import NewsDesc from './NewsDesc'
import NewsMeta from './NewsMeta'

function NewsDisplay(props) {
	const { bg = '', logo = '', color = '', height = '' } = props.config
	const {
		author = '',
		date = '',
		description = '',
		// use img in left-section
		img = '',
		title = ''
	} = props.itemMeta

	return (
		<NewsDisplayLayout bg={bg} color={color}>
			<TransitionGroup className="transition-container">
				<NewsLogo src={logo} alt="logo" height={height} />
				<CSSTransition
					key={title}
					timeout={500}
					classNames="fade"
					unmountOnExit
				>
					<NewsTitle title={title} />
				</CSSTransition>
				<CSSTransition
					key={description}
					timeout={{
						enter: 300,
						exit: 2000
					}}
					classNames="fade"
					unmountOnExit
				>
					<NewsDesc description={description} />
				</CSSTransition>
				<NewsMeta author={author} date={date} />
			</TransitionGroup>
		</NewsDisplayLayout>
	)
}

export default React.memo(NewsDisplay)
