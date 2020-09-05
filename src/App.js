import React from 'react'

import './scss/App.scss'
import RasaContextProvider from './contexts/RasaContext'

function App() {
	return (
		<RasaContextProvider>
			<div className="App"></div>
		</RasaContextProvider>
	)
}

export default App
