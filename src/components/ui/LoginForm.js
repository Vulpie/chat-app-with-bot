import React, { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { FlashContext } from '../../contexts/FlashContext'

const LoginForm = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const { dispatch: userDispatch } = useContext(UserContext)
	const { dispatch: flashDispatch } = useContext(FlashContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (login && password) {
			userDispatch({
				type: 'AUTHENTICATE_USER',
				payload: {
					login,
					password,
				},
			})
		} else {
			console.log('Flash message')
			flashDispatch({
				type: 'ERROR_MESSAGE',
				payload: {
					message_content: 'Incorrect login or password',
					persistent: false,
				},
			})
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
			<button type="submit" className="login-screen__button">
				Log In
			</button>
		</form>
	)
}

export default LoginForm
