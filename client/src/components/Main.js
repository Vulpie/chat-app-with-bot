import React, { useContext } from 'react'

import MainDisplayUI from './ui/MainDisplayUI'
import PanelUI from './ui/PanelUI'
import { UserContext } from '../contexts/UserContext'
import DefaultScreen from './ui/DefaultScreen'

const Main = () => {
	const { user } = useContext(UserContext)

	const screen = (
		<>
			<PanelUI />
			<MainDisplayUI />
		</>
	)
	return user.isAuthenticated ? screen : <DefaultScreen />
}

export default Main
