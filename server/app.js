const express = require('express')
const app = express()
require('./db/mongoose')

const UserRouter = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(UserRouter)

module.exports = app
