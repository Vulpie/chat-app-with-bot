import React, { useContext } from 'react'

import MainDisplayUI from './ui/MainDisplayUI'
import PanelUI from './ui/PanelUI'
import LoginScreen from './ui/LoginScreen'
import { UserContext } from '../contexts/UserContext'

const Main = () => {
	const { user } = useContext(UserContext)
	console.log('user', user)
	const screen = (
		<>
			<PanelUI />
			<MainDisplayUI />
		</>
	)
	return user.isAuthenticated === true ? screen : <LoginScreen />
}

export default Main
