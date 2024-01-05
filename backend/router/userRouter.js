const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    // const {name,email,password} = req.body
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
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