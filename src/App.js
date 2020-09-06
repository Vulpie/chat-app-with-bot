import React from 'react'

import './scss/App.scss'
import RasaContextProvider from './contexts/RasaContext'
import MessagesContextProvider from './contexts/MessagesContext'
import SendForm from './components/ui/SendForm'
import MessageList from './components/ui/MessageList'

function App() {
	return (
		<div className="App">
			<MessagesContextProvider>
				<RasaContextProvider>
					<MessageList />
					<SendForm />
				</RasaContextProvider>
			</MessagesContextProvider>
		</div>
	)
}

export default App
