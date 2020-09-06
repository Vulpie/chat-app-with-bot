import React from 'react'

import './scss/App.scss'
import Main from './components/Main'
import UserContextProvider from './contexts/UserContext'

function App() {
	return (
		<div className="ui">
			<UserContextProvider>
				<Main />
			</UserContextProvider>
		</div>
	)
}

export default App
