const { model } = require("mongoose");
const { Schema, Types } = require("mongoose");

const myOrder = new Schema({
    user:{type:Types.ObjectId, ref :'user'},
    totalAmount: {type:Number, required:true},
    productName :{type:String, required:true},
    units:{type:Number,default :1}
})

module.exports = model('order',myOrder)