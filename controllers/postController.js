const express = require('express');
const Post = require('../models/postModel');


exports.post_create = function(req,res){
    console.log(`Entered insert post with body ${JSON.stringify(req.body)}`)
    const title = req.body.title || '';
    const text = req.body.text || '';
    const imageLink = req.body.imageLink || '';

    const requestBody = { title, text, imageLink };

    //validation
    let errors = {};
    if (!title) {
        errors = { ...errors, title: "Post must have a title" };
    }
    if (Object.keys(errors).length > 0) {
        res.json({ errors });
    } else {
        const post = new Post({
            title: requestBody.title,
            text: requestBody.text,
            imageLink: requestBody.imageLink,
            author: req.user.id
        });
        post.save();
        res.json({ success: true });
    }

    console.log("Finished insert post")

}

exports.post_get = function(req,res){
    Post.aggregate([
        {
            $lookup: {
                "from": "users",
                "localField": "author",
                "foreignField": "_id",
                "as": "author"
            },
        },
        {
            $unwind: "$author"
        },
        {
            $project:
            {
                "id": "$_id",
                "title": 1,
                "text": 1,
                "imageLink": 1,
                "videoLink": 1,
                "createDate": 1,
                "authorName": "$author.username",
            }
        },
        {
            $sort:
            {
                "createDate": -1
            }
        }

    ], { allowDiskUse: true }, (err, docs) => res.json(docs));
};

exports.post_findById= function(req,res){
    let doc = null;
    Post.aggregate([
        {
            $match: 
            {
                "_id": mongoose.Types.ObjectId(req.params.id)
            }
        },
        {
            $lookup:
            {
                "from": "users",
                "localField": "author",
                "foreignField": "_id",
                "as": "author"
            },
        },
        {
            $unwind: "$author"
        },
        {
            $project:
            {
                "id": "$_id",
                "title": 1,
                "text": 1,
                "imageLink": 1,
                "videoLink": 1,
                "createDate": 1,
                "authorName": "$author.username",
            }
        },
        {
            $sort:
            {
                "createDate": -1
            }
        }

    ], { allowDiskUse: true }, (err, docs) => res.json(docs[0]));
}

exports.post_deleteOne = function(req,res){
    Post.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(401).send("Unable to delete post")
        } else {
            res.json({ success: true });
        }
    })
}

exports.post_update = function(req,res){
    const title = req.body.title || '';
    const text = req.body.text || '';
    const imageLink = req.body.imageLink || '';

    const requestBody = { title, text, imageLink };

    Post.updateOne({ '_id': req.params.id },
        {
            title: requestBody.title,
            text: requestBody.text,
            imageLink: requestBody.imageLink,
        }, {}, (err, r) => {
            if (err) {
                res.json({ error: err.message })
            } else {
                res.json({ success: true });
            }
        })
};

