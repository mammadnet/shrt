const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const url = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    urlCode: {
        type: String,
        required:true
    },
    delay: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("url", url);