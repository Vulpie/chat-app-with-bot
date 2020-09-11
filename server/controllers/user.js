const User = require('../models/user')

exports.registerNewUser = async (req, res) => {
	console.log('New register request')

	const user = new User(req.body)

	try {
		await user.save()
		res.status(201).json('ok')
	} catch (e) {
		console.log(e)
		res.status(401).send('Unable to create user')
	}
}
