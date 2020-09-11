const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
	login: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	surname: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(email) {
			if (!validator.isEmail(email)) {
				throw new Error('Invalid email')
			}
		},
	},
})

const User = mongoose.model('User', userSchema)

module.exports = User
