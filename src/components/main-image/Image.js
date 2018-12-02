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

	margin: auto 0;
	height: auto;
	max-width: 100%;

	opacity: 0;
	transition: all 300ms ease-in-out;
	animation: fade-in 500ms ease-in forwards;
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

	const handleOnImageLoad = useCallback(
		function(e) {
			if (props.isPerformant && props.href) {
				const { height, width } = props.containerRef.current
				const options = {
					width,
					height,
					minScale: 1
				}

				// TODO: Error in drawing canvas
				// smartcrop
				// 	.crop(imageRef, options)
				// 	.then(result => {
				// 		if (result && result.topCrop) {
				// 			setImgCrop(result.topCrop)
				// 			console.log('setting smartcrop', result.topCrop)
				// 		}
				// 	})
				// 	.catch(error => console.log(error))
			}
		},
		[props.href]
	)

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
