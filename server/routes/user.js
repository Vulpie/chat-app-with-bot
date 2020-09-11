const express = require('express')

const router = new express.Router()

const { registerNewUser } = require('../controllers/user')

router.route('/users/register').post(registerNewUser)

module.exports = router
