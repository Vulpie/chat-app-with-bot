import React, { useContext, useEffect, useState } from 'react'
import { RasaContext } from '../../contexts/RasaContext'
import { MessagesContext } from '../../contexts/MessagesContext'
import Message from './Message'
import { FlashContext } from '../../contexts/FlashContext'

const MessageList = () => {
	const { messages, dispatch: dispatchMessage } = useContext(MessagesContext)
	const { dispatch: dispatchFlashMessage } = useContext(FlashContext)
	const { rasaSocket } = useContext(RasaContext)
	const [messageList, setMessageList] = useState(messages)

	useEffect(() => {
		rasaSocket.on('session_confirm', (session_id) => {
			console.log('session_id: ', session_id)
		})

		rasaSocket.on('bot_uttered', (content) => {
			dispatchMessage({
				type: 'ADD_MESSAGE',
				message: {
					author: 'Bot',
					content: content.text,
				},
			})
		})

		rasaSocket.on('connect_error', () => {
			dispatchFlashMessage({
				type: 'ERROR_MESSAGE',
				payload: {
					message_content: 'Unable to connect to Rasa server',
					persistent: true,
				},
			})
		})
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		const new_message_list = messages.map(
			({ id, author, content, createdAt }) => (
				<Message
					key={id}
					author={author}
					content={content}
					createdAt={createdAt}
				/>
			)
		)
		setMessageList(new_message_list)
		console.log(new_message_list)
	}, [messages])

	return (
		<div className="ui__main-display_message-list">
			{/* {messages.length === 0 ? <p>No messages</p> : messageList} */}
			{/* {messages.length === 0 ? <p>No messages</p> : <p>Messages</p>} */}
			{messageList}
		</div>
	)
}

export default MessageList
