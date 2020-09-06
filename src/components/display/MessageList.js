import React, { useContext, useEffect } from 'react'
import { RasaContext } from '../../contexts/RasaContext'

const MessageList = () => {
	//const { messages } = useContext(MessagesContext)
	const { rasaSocket } = useContext(RasaContext)

	useEffect(() => {
		rasaSocket.on('session_confirm', (session_id) => {
			console.log('session_id: ', session_id)
		})
		rasaSocket.on('bot_uttered', (message) => {
			console.log('Bot: ', message)
		})
		// eslint-disable-next-line
	}, [])
	return (
		<div className="ui__message-list">
			<p>message list</p>
		</div>
	)
}

export default MessageList
