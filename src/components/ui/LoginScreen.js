import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginScreen = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const { setIsAuthenticated } = useContext(AuthContext)
	const handleSubmit = (e) => {
		e.preventDefault()
		if (login && password) {
			setIsAuthenticated(true)
		}
		setLogin('')
		setPassword('')
	}

	return (
		<form className="login-screen" onSubmit={(e) => handleSubmit(e)}>
			<label className="login-screen__label">Login</label>
			<input
				type="text"
				name="login"
				className="login-screen__input"
				onChange={(e) => setLogin(e.target.value)}
				value={login}
			/>
			<label className="login-screen__label">Password</label>
			<input
				type="password"
				name="password"
				className="login-screen__input"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<button type="submit">Log In</button>
		</form>
	)
}

export default LoginScreen
