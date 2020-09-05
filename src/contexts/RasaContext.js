import React, { useState, createContext, useEffect } from 'react'
import io from 'socket.io-client'

export const RasaContext = createContext()

const RasaContextProvider = (props) => {
	const [rasaSocket, setRasaSocket] = useState()
	useEffect(() => {
		const socket = io('http://localhost:5005')
		socket.on('connect', () => {
			console.log(`connect:${socket.id}`)
		})
		setRasaSocket(socket)
	}, [])
	return (
		<RasaContext.Provider value={{ rasaSocket }}>
			{props.children}
		</RasaContext.Provider>
	)
}

export default RasaContextProvider
