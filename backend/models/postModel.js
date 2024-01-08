const { model } = require("mongoose");
const { Schema } = require("mongoose");

const myPost = new Schema({
    sendername:String,
    content:String,
    image:String,
    like:Number,
    comment:String,
    share:String
})

module.exports = model('post',myPost)