import React from 'react'

import './scss/App.scss'
import Main from './components/Main'
import AuthContextProvider from './contexts/AuthContext'

function App() {
	return (
		<div className="ui">
			<AuthContextProvider>
				<Main />
			</AuthContextProvider>
		</div>
	)
}

export default App
