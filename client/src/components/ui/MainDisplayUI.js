import React from 'react'

import SendForm from '../form/SendForm'
import MessageList from '../display/MessageList'
import RasaContextProvider from '../../contexts/RasaContext'
import MessagesContextProvider from '../../contexts/MessagesContext'

const MainDisplayUI = () => {
	return (
		<div className="ui__main-display">
			<RasaContextProvider>
				<MessagesContextProvider>
					<SendForm />
					<MessageList />
				</MessagesContextProvider>
			</RasaContextProvider>
		</div>
	)
}

export default MainDisplayUI
