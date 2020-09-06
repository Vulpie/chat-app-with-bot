import React, { useContext, useState } from 'react'
import { RasaContext } from '../../contexts/RasaContext'

const SendForm = () => {
	const { dispatch } = useContext(RasaContext)
	const [userInput, setUserInput] = useState('')

	const handleSendButton = (e) => {
		e.preventDefault()
		let message_content = e.target['user_input'].value
		dispatch({ type: 'SEND_MESSAGE', message: message_content })
		setUserInput('')
	}
	return (
		<form onSubmit={(e) => handleSendButton(e)} className="message-form">
			<input
				className="message-form__input"
				type="text"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				name="user_input"
			/>
			<button className="message-form__button" type="submit">
				Send
			</button>
		</form>
	)
}

export default SendForm
