const express = require('express')

const router = new express.Router()

const { registerNewUser, loginUser } = require('../controllers/user')

router.route('/users/register').post(registerNewUser)
router.route('/users/login').post(loginUser)

module.exports = router
