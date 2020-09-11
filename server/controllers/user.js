const User = require('../models/user')

exports.registerNewUser = async (req, res) => {
	const user = new User(req.body)
	try {
		await user.save()
	} catch (e) {
		res.status(400).send('Unable to create user')
	}
}
