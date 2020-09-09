const mongoose = require('mongoose')

const userSchema = new mangoose.Schema({
	login: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 13,
	},
})

const User = mongoose.model('User', userSchema)

module.exports = User
