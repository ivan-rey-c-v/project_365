import React, { useState, useRef, useCallback, useEffect } from 'react'
import smartcrop from 'smartcrop'
import styled from 'styled-components'

const Img = styled.img`
	${props => {
		if (props.imgCrop) {
			return {
				marginTop: `${props.imgCrop.y * -1}px`,
				marginLeft: `${props.imgCrop.x * -1}px`
			}
		}
	}};
`

function Image(props) {
	const imageRef = useRef(null)
	const [imgCrop, setImgCrop] = useState(null)
	const [imgMeasurement, setImgMeasurement] = useState('tall')

	useEffect(
		function() {
			const { height, width } = imageRef.current
			const measurement = height > width ? 'tall' : 'wide'
			setImgMeasurement(measurement)
		},
		[imageRef]
	)

	const handleOnImageLoad = useCallback(function(e) {
		if (props.isPerformant) {
			const options = {
				minScale: 1,
				width: document.body.clientWidth * 0.6,
				height: document.body.clientHeight
			}
			// todo: how to get image from the imageRef
			// smartcrop
			// 	.crop(image, options)
			// 	.then(result => {
			// 		if (result && result.topCrop) {
			// 			setImgCrop(result.topCrop)
			// 		}
			// 	})
			// 	.catch(error => console.log(error))
		}
	}, [])

	console.log('img ref', imageRef.current)

	return (
		<Img
			alt="news-image"
			src={props.href}
			imgCrop={imgCrop}
			imgMeasurement={imgMeasurement}
			ref={imageRef}
			onLoad={handleOnImageLoad}
		/>
	)
}

export default React.memo(Image)
