import React, { useReducer, createContext } from 'react'
import { MessagesReducer } from '../reducers/MessagesReducer'

export const MessageContext = createContext()

const MessageContextProvider = (props) => {
	const [messages, dispatch] = useReducer(MessagesReducer, {})
	return (
		<MessageContext.Provider value={{ messages, dispatch }}>
			{props.children}
		</MessageContext.Provider>
	)
}

export default MessageContextProvider
