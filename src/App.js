import React from 'react'

import './scss/App.scss'
import MainDisplayUI from './components/ui/MainDisplayUI'
import PanelUI from './components/ui/PanelUI'

function App() {
	return (
		<div className="ui">
			<PanelUI />
			<MainDisplayUI />
		</div>
	)
}

export default App
