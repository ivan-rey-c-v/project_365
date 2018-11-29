import React, { useState, useEffect } from 'react'

function useIsPerformant() {
	const [isPerformant, setIsPerformant] = useState(true)
	// use Date.now() instead of + new Date()
	const [lastTimestamp, setLastTimestamp] = useState(Date.now())

	useEffect(() => {
		function perfCheck() {
			var difference = Date.now() - lastTimestamp
			setLastTimestamp(Date.now())
			/**
			 * Compares the execution of requestAnimationFrame to it's ideal, 60fps.
			 * When Javascript is performant, the difference should approach 16ms.
			 * When experiencing degraded Javascript performance, this value will begin to increase.
			 * If it reaches 32, we toggle the flag `window.performant`, which other
			 * functions can use to turn off the execution of optional features
			 */
			const performanceLimit = 32
			if (difference > performanceLimit) {
				setIsPerformant(false)
			}

			requestAnimationFrame(perfCheck)
		}
		requestAnimationFrame(perfCheck)
	}, [])

	return isPerformant
}

export default useIsPerformant
