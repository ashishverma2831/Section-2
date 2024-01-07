// const mongoose = require('../connection')
const { default: mongoose } = require('mongoose')
const {Schema,model} = require('../connection')

const myschema = new Schema({
    email:String,
    name:String,
    location:{
        type:String,
        default:'Not Specified'
    },
    password:String
});

module.exports = model('user',myschema)