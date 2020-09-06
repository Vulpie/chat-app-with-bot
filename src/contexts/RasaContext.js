import React, { createContext, useEffect, useReducer } from 'react'
import io from 'socket.io-client'
import { RasaReducer } from '../reducers/RasaReducer'

export const RasaContext = createContext()

const RasaContextProvider = (props) => {
	const socket = io('http://localhost:5005')
	const [rasaSocket, dispatch] = useReducer(RasaReducer, socket)
	useEffect(() => {
		rasaSocket.on('connect', () => {
			console.log(`connect:${rasaSocket.id}`)
		})
		// eslint-disable-next-line
	}, [])
	return (
		<RasaContext.Provider value={{ rasaSocket, dispatch }}>
			{props.children}
		</RasaContext.Provider>
	)
}

export default RasaContextProvider
