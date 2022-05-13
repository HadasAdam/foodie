const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

// const sequenceCollection = new mongoose.Collection("sequence")

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;