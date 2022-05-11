const express = require('express');
const router = new express.Router();
const Post = require('../models/postModel');
const auth = require("../middleware/auth");
const { mongoConnectionString } = require('../config');
const { default: mongoose } = require('mongoose');
const post_controller = require ('../controllers/postController');


router.post('/', auth, post_controller.post_create);

router.get('/', post_controller.post_get);

router.get('/:id',post_controller.post_findById);

router.delete('/:id', post_controller.post_deleteOne);

router.put('/:id', auth, post_controller.post_update);

module.exports = router;