const express = require('express');
const route = express.Router()
const {dashborad,login} = require('../controller/controller')
const authMiddleware = require('../middleware/auth')

route.route('/login').post(login)
route.route('/dashboard').get(authMiddleware, dashborad)

module.exports = route