const express = require('express');
const router = new express.Router();
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Get comments
router.get('/post/:id/comment', (req, res) => {
    res.render('post-comment', {title: 'Post a comment'})
})

router.post('/post/:id/comment', async (req, res) => {
// find out which post you are commenting
    const id = req.params.id;
// get the comment text and record post id
    const comment = new Comment({
        text: req.body.comment,
        post: id
    })
    // save comment
    await comment.save();
    // get this particular post
    const postRelated = await Post.findById(id);
    // push the comment into the post.comments array
    postRelated.comments.push(comment);
    // save and redirect...
    await postRelated.save(function(err) {
        if(err) {console.log(err)}
        res.redirect('/')
    })

})

//  Get each post details.
router.get('/post/:id', (req, res) => {
    Post.findById(req.params.id)
        .populate('comments')
        .exec(function(err, results) {
            if(err) {console.log(err)}
                res.render('post_details', {title: 'Post details', post: 
            results, comments: results.comments})
         })
})

router.get('/new', (req, res) => {
    res.render('create-post', {title: 'Create a post'})
})

router.post('/new', (req, res) => {
    const post = new Post({
        title: req.body.title,
        text: req.body.text
     });
    post.save(function(err) {
        if(err) {console.log(err)}
        res.redirect('/')
    })
})

router.get('/', (req, res) => {
    Post.find()
        .exec(function(err, results) {
            if(err) {console.log(err)}
            res.render('posts', {title: 'All Posts', posts: results})
        })
});

 module.exports = router;