import React, { useState, useContext } from 'react'
import { FlashContext } from '../../contexts/FlashContext'

const RegisterForm = () => {
	const { dispatch: flashDispatch } = useContext(FlashContext)
	const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [re_password, setRe_password] = useState('')
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === re_password && password.length > 8) {
			fetch('/users/register', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, email, password, name, surname }),
			})
				.then((res) => res.json())
				.then((res) => {
					flashDispatch({
						type: 'SUCCESS_MESSAGE',
						payload: {
							message_content: 'Rejestracja przebiegła pomyślnie',
							persistent: false,
						},
					})
					console.log(res)
				})
		} else {
			flashDispatch({
				type: 'ERROR_MESSAGE',
				payload: {
					message_content:
						'Hasła powinny być jednakowe i mieć długość co najmneij 8 znaków',
					persistent: false,
				},
			})
		}
	}

	return (
		<form
			className="login-screen"
			onSubmit={(e) => {
				handleSubmit(e)
			}}
		>
			<label className="login-screen__label">Login</label>
			<input
				type="text"
				name="login"
				className="login-screen__input"
				onChange={(e) => setLogin(e.target.value)}
				value={login}
				required
			/>
			<label className="login-screen__label">Email</label>
			<input
				type="text"
				name="email"
				className="login-screen__input"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
			<label className="login-screen__label">Password</label>
			<input
				type="password"
				name="password"
				className="login-screen__input"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			/>
			<label className="login-screen__label">Repeat Password</label>
			<input
				type="password"
				name="re-password"
				className="login-screen__input"
				onChange={(e) => setRe_password(e.target.value)}
				value={re_password}
				required
			/>
			<label className="login-screen__label">Name</label>
			<input
				type="text"
				name="name"
				className="login-screen__input"
				onChange={(e) => setName(e.target.value)}
				value={name}
				required
			/>
			<label className="login-screen__label">Surname</label>
			<input
				type="text"
				name="surname"
				className="login-screen__input"
				onChange={(e) => setSurname(e.target.value)}
				value={surname}
				required
			/>
			<button type="submit" className="login-screen__button">
				Register
			</button>
		</form>
	)
}

export default RegisterForm
