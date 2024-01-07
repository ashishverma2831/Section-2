const { model } = require("mongoose");
const { Schema } = require("mongoose");

const myProduct = new Schema({
    brand:String,
    model:String,
    color:String,
    image:String,
    price:Number,
    reviews:String
})

module.exports = model('product',myProduct)