const express = require('express');
const router = express.Router();
const Tag = require('../models/tagModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const tag_controller = require('../controllers/tagController');


//endpoint for creating tag
router.post('/create', tag_controller.tag_create);

router.get('/get', tag_controller.tag_getAll);

router.get('/get/:id', tag_controller.tag_getById);

router.post('/delete/:id', tag_controller.tag_delete);

router.post('/update/:id', tag_controller.tag_updateById);


module.exports = router;