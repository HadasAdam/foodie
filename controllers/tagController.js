const express = require('express');
const Tag = require('../models/tagModel');

exports.tag_create =  function(req,res){
    const name = req.body.name ;

    const requestBody = { name };

    //check validation
    let errors = {};
    if (!name) {
        errors = { name: "Tag must have name"}
    }
    if (Object.keys(errors).length > 0){
        res.json({ errors })
    } else {
        const tag = new Tag({
            name: requestBody.name
        })
        tag.save();
        res.json({success: true})
    }

}

exports.tag_delete = function(req,res){

    Tag.deleteOne({ '_id': req.query.id }, (err) => {
        if (err) {
            res.status(400).send("Unable to delete tag")
        } else {
            res.json({ success: true });
        }
    })
}