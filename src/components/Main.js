import React, { useContext } from 'react'

import MainDisplayUI from './ui/MainDisplayUI'
import PanelUI from './ui/PanelUI'
import { AuthContext } from '../contexts/AuthContext'
import LoginScreen from './ui/LoginScreen'

const Main = () => {
	const { isAuthenticated } = useContext(AuthContext)
	const screen = (
		<>
			<PanelUI />
			<MainDisplayUI />
		</>
	)
	return <>{isAuthenticated ? screen : <LoginScreen />}</>
}

export default Main
