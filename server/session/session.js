const two_hours = 1000 * 60 * 60 * 2
const session_name = 'sid_node_app'

const sessionParams = {
	name: session_name,
	resave: false,
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET,
	cookie: {
		maxAge: two_hours,
		someSite: true,
	},
}

module.exports = sessionParams
