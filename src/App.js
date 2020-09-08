import React from 'react'

import './scss/App.scss'
import Main from './components/Main'
import UserContextProvider from './contexts/UserContext'
import FlashContextProvider from './contexts/FlashContext'
import Flash from './components/fixed/Flash'

function App() {
	return (
		<div className="ui">
			<FlashContextProvider>
				<UserContextProvider>
					<Main />
				</UserContextProvider>
				<Flash />
			</FlashContextProvider>
		</div>
	)
}

export default App
