const express = require('express')
const app = express()
require('./db/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app
