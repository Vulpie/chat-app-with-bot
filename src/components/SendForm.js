import React, { useContext } from 'react'
import { RasaContext } from '../contexts/RasaContext'

const SendForm = () => {
	const { rasaSocket } = useContext(RasaContext)

	const handleSendButton = (e) => {
		e.preventDefault()
		rasaSocket.on('connect', () => {
			console.log(`connect:${rasaSocket.id}`)
		})
	}
	return (
		<form onSubmit={(e) => handleSendButton(e)}>
			<label>Send message</label>
			<button>Send</button>
		</form>
	)
}

export default SendForm
