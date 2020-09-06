import React, { useReducer, createContext } from 'react'
import { MessagesReducer } from '../reducers/MessagesReducer'

export const MessagesContext = createContext()

const MessagesContextProvider = (props) => {
	const [messages, dispatch] = useReducer(MessagesReducer, [
		{
			id: 1,
			content: 'Hello Rasa',
			createdAt: '09/10/2020',
			author: 'Vulpie',
		},
	])
	return (
		<MessagesContext.Provider value={{ messages, dispatch }}>
			{props.children}
		</MessagesContext.Provider>
	)
}

export default MessagesContextProvider
