const express = require('express');
const router = express.Router();
const Tag = require('../models/tagModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const tag_controller = require('../controllers/tagController');


//endpoint for creating tag
router.post('/create', tag_controller.tag_create());

// router.get('/get', tag_controller.tag_get());

router.post('/delete/:id', tag_controller.tag_delete());


module.exports = router;