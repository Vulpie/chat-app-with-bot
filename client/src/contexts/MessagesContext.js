import React, { useReducer, createContext } from 'react'
import { MessagesReducer } from '../reducers/MessagesReducer'

export const MessagesContext = createContext()

const MessagesContextProvider = (props) => {
	const [messages, dispatch] = useReducer(MessagesReducer, [])
	return (
		<MessagesContext.Provider value={{ messages, dispatch }}>
			{props.children}
		</MessagesContext.Provider>
	)
}

export default MessagesContextProvider
