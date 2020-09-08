import React, { useState, useContext, useEffect } from 'react'
import { FlashContext } from '../../contexts/FlashContext'

const Flash = () => {
	const { flashMessage } = useContext(FlashContext)
	const [visibility, setVisibility] = useState(false)

	useEffect(() => {
		setVisibility(true)
		console.log('Popup:', flashMessage)
		const timer = setTimeout(() => {
			setVisibility(false)
		}, 7000)
		return () => clearTimeout(timer)
	}, [flashMessage])

	return (
		visibility && (
			<div className="flash">
				<div className={`flash__${flashMessage.message_type}`}>
					{flashMessage.message_content}
				</div>
			</div>
		)
	)
}

export default Flash
