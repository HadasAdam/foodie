const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const user_controller = require ('../controllers/userController');



//endpoint for signing up
router.post('/signup', user_controller.user_create);

//endpoint for logging in
router.post('/login', user_controller.user_login);

module.exports = router;