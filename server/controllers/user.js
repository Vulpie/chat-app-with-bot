const User = require('../models/user')

exports.registerNewUser = async (req, res) => {
	const user = new User(req.body)

	try {
		await user.save()
		const token = await user.generateAuthToken()
		req.session.token = token
		res.status(201).json('ok')
	} catch (e) {
		console.log(e)
		res.status(401).send('Unable to create user')
	}
}

exports.loginUser = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await user.findToLogIn(email, password)
		const token = await user.generateAuthToken()
		req.session.token = token
		res.status(200).json(user)
	} catch (e) {
		res.status(401).send('Unable to log in')
	}
}
