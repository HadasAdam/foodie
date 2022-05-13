const users = require('./routes/usersRoute');
const posts = require('./routes/postRoute');
const tags = require('./routes/tagRoute');
const express = require('express');
router = express.Router();

router.use('/api/users', users);

//sets the posts path
router.use('/api/posts', posts);


router.use('/api/tags', tags);

module.exports = router;