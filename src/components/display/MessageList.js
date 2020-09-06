import React, { useContext, useEffect } from 'react'
import { RasaContext } from '../../contexts/RasaContext'
import { MessagesContext } from '../../contexts/MessagesContext'
import Message from './Message'

const MessageList = () => {
	const { messages } = useContext(MessagesContext)
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

	const displayMessages = () => {
		return messages.map((message) => (
			<Message
				key={message.id}
				author={message.author}
				content={message.content}
				createdAt={message.createdAt}
			/>
		))
	}

	return (
		<div className="ui__message-list">
			{messages.length === 0 ? <p>No messages</p> : displayMessages()}
		</div>
	)
}

export default MessageList
