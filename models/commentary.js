const mongoose = require('mongoose');

const commentarySchema = new mongoose.Schema({
    author : {
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        userName : String,  
    },
    commentary: {
        type: String,
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Commentary', commentarySchema);
