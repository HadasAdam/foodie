const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _id: {
        type: Number
    }
});


tagSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: '_id'});
const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;

