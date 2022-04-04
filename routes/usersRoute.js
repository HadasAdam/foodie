const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const userExists = (username) => {
    return { error, exists } = User.findOne({username: username}).exec()
        .then(user => {
            if(user){
                return true;
            }
            return false;
        })
        .catch(err => console.log(err));
}

router.get('/', async (req, res) => {
    res.json("user endpoint is working!");
});


//endpoint for signing up
router.post('/signup', async (req, res) => {
    const firstName = req.body.firstName || '';
    const lastName = req.body.lastName || '';
    const gender = req.body.gender || '';
    const username = req.body.username || '';
    const password = req.body.password || '';

    const requestBody = { firstName, lastName, username, gender, password };

    let errors = {};

    //makes sure fields are not empty
    Object.keys(requestBody).forEach(async field => {
        if (requestBody[field] == '') {
            errors = { ...errors, [field]: 'Field cannot be empty' }
        }
    });

    //checks if user already exists
    const exists = await userExists(requestBody.username);
    if(exists)
    {
        errors = { ...errors, username: "Username already exists" }
    }

    //if errors are empty, creates user
    if (Object.keys(errors).length > 0) {
        res.json({ errors });
    } else {
        //creates user object
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            username: username,
            password: password
        });

        //creating user and puts it in the database with an encrypted password
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return err;

            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return err;

                user.password = hash;
                user.save((err) => {
                    if (err) return err;
                    res.json({ success: 'success' });
                })
            });
        })
    }
});

router.post('/login', async (req, res) => {

    const username = req.body.username || '';
    const password = req.body.password || '';

    //checks if fields are empty
    let errors = {};
    if (username === '') {
        errors = { ...errors, username: 'This field is required' };
    }
    if (password === '') {
        errors = { ...errors, password: 'This field is required' };
    }

    //checks if there are no errors
    if (Object.keys(errors) > 0) {
        res.json({ errors });
    } else {
        //tries to find the user requesting to login in the database
        User.findOne({ username: username }, (err, user) => {
            if (err) throw err;

            if (user) {
                //user found, checks if password is matching when encrypted
                bcrypt.compare(password, user.password, (err, passwordsMatching) => {
                    if (err) return err;

                    if (passwordsMatching) {
                        //passwords matching, create json web token to give the client
                        const token = jwt.sign({
                            id: user._id,
                            username: user.username
                        }, config.jwtSecret);
                        res.json({ token, success: 'success' });
                    } else{
                        //password did not match
                        res.json({errors: {badLogin: 'Wrong username or password'}});
                    }
                });
            } 
            else{
                //username does not exist
                res.json({errors: {badLogin: 'Wrong username or password'}});
            }
        })
    }




});

module.exports = router;