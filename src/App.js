import React from 'react'

import './scss/App.scss'
import RasaContextProvider from './contexts/RasaContext'
import SendForm from './components/SendForm'

function App() {
	return (
		<div className="App">
			<RasaContextProvider>
				<SendForm />
			</RasaContextProvider>
		</div>
	)
}

export default App
