const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    imageLink: {
        type: String,
    },
    videoLink: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

});

postSchema.virtual('url').get(function(){
    return '/post/' + this._id
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post; 