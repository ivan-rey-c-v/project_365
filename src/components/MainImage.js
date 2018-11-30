import React, { useState, useRef, useEffect, useCallback } from 'react'

function MainImage(props) {
	const imageRef = useRef(null)
	const [imgCrop, setImgCrop] = useState(null)
	const [isImgTall, setIsImgTall] = useState(true)

	useEffect(
		function() {
			const { height, width } = imageRef.current
			setIsImgTall(height > width)
		},
		[imageRef]
	)

	const handleOnImageLoad = useCallback(function(e) {
		if (props.isPerformant) {
			let smartcrop = () => 'to be added as dependency'
			const options = {
				minScale: 1,
				width: document.body.clientWidth * 0.6,
				height: document.body.clientHeight
			}
			smartcrop
				.crop(imageRef, options)
				.then(result => {
					if (result && result.topCrop) {
						setImgCrop(result.topCrop)
					}
				})
				.catch(error => console.log(error))
		}
	}, [])

	return (
		<img
			alt=""
			style={
				imgCrop && {
					marginTop: `${imgCrop.y * -1}px`,
					marginLeft: `${imgCrop.x * -1}px`
				}
			}
			className={`main  ${isImgTall ? 'tall' : 'wide'}`}
			ref={imageRef}
			onLoad={handleOnImageLoad}
		/>
	)
}

export default React.memo(MainImage)
