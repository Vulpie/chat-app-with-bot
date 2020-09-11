import React, { useContext, useState } from 'react'
import { RasaContext } from '../../contexts/RasaContext'
import { MessagesContext } from '../../contexts/MessagesContext'
import { UserContext } from '../../contexts/UserContext'

const SendForm = () => {
	const { dispatch: dispatchRasaMessage } = useContext(RasaContext)
	const { dispatch: dispatchMessage } = useContext(MessagesContext)
	const { user } = useContext(UserContext)
	const [userInput, setUserInput] = useState('')

	const handleSendButton = (e) => {
		e.preventDefault()
		let message_content = e.target['user_input'].value
		dispatchRasaMessage({ type: 'SEND_MESSAGE', message: message_content })
		dispatchMessage({
			type: 'ADD_MESSAGE',
			message: {
				content: message_content,
				author: user.login,
			},
		})
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
