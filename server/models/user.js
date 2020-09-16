const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
	{
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
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
)

userSchema.methods.generateAuthToken = async function () {
	const user = this
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
	user.tokens = user.tokens.concat({ token })
	await user.save()
	return token
}

userSchema.statics.findToLogIn = async (email, password) => {
	const user = await User.findOne({ email })
	if (!user) {
		throw new Error('Unable to login')
	}
	const isMatch = await bcrypt.compare(password, user.password)
	if (isMatch) {
		throw new Error('Unable to login')
	}
	return user
}

userSchema.pre('save', async function (req, res, next) {
	const user = this
	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8)
	}
	next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
