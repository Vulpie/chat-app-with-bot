const express = require('express')
const session = require('express-session')

const sessionParams = require('./session/session')
const app = express()
require('./db/mongoose')

const UserRouter = require('./routes/user')

app.use(session(sessionParams))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(UserRouter)

module.exports = app
