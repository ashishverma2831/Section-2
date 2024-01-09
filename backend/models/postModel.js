const { model } = require("mongoose");
const { Schema } = require("mongoose");

const myPost = new Schema({
    sendername:String,
    content:String,
    image:String,
    like:{
        type:Number,
        default:1
    },
    comment:{
        type:String,
        default:"0"
    },
    share:String
})

module.exports = model('post',myPost)