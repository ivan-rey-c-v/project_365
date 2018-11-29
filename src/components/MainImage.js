import React, { useState, useRef, useEffect } from 'react'

function MainImage(props) {
	const imageRef = useRef(null)
	const [isImgTall, setIsImgTall] = useState(true)

	useEffect(
		function() {
			const { height, width } = imageRef.current
			setIsImgTall(height > width)
		},
		[imageRef]
	)

	return (
		<img
			alt=""
			src={''}
			className={`main  ${isImgTall ? 'tall' : 'wide'}`}
			ref={imageRef}
		/>
	)
}

export default React.memo(MainImage)
