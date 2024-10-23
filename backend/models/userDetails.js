const mongo = require("mongoose");

const userDetails = new mongo.Schema({
    Id: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    profilePictureLink: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model('userDetails', userDetails);