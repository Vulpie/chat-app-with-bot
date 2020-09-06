import React, { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const VIEWS = {
	LOGIN: 'login',
	REGISTER: 'register',
}

const DefaultScreen = () => {
	const [selectedScreen, setSelectedScreen] = useState(VIEWS.LOGIN)
	const [view, setView] = useState()

	useEffect(() => {
		if (selectedScreen === VIEWS.LOGIN) {
			setView(<LoginForm />)
		} else if (selectedScreen === VIEWS.REGISTER) {
			setView(<RegisterForm />)
		}
	}, [selectedScreen])
	return (
		<div className="ui__default-screen">
			<div className="ui__default-screen_navbar">
				<ul className="ui__default-screen_navbar_list">
					<li
						className="ui__default-screen_navbar_list_item"
						onClick={() => setSelectedScreen(VIEWS.LOGIN)}
					>
						Login
					</li>
					<li
						className="ui__default-screen_navbar_list_item"
						onClick={() => setSelectedScreen(VIEWS.REGISTER)}
					>
						Register
					</li>
				</ul>
			</div>
			{view}
		</div>
	)
}

export default DefaultScreen
