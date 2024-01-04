const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.get('/add',(req,res)=>{
    res.send('add response from user router')
})
router.get('/getall',(req,res)=>{
    res.send('get all response from user router')
})
router.get('/getbyid',(req,res)=>{
    res.send('get by id response from user router')
})
router.get('/update',(req,res)=>{
    res.send('update response from user router')
})
router.get('/delete',(req,res)=>{
    res.send('delete response from user router')
})
//getAll
//getbyid
//update
//delete
module.exports = router;