const express = require('express');
const router = express.Router();
const Model = require('../models/orderModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    // const {name,email,password} = req.body
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})
router.get('/getall',(req,res)=>{
    // res.send('get all response from user router')
    Model.find().populate('user')
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})


router.get('/getbyid/:id',(req,res)=>{
    // res.send('get by id response from user router')
    // Model.find({_id:req.params.id})
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.put('/update/:id',(req,res)=>{
    // res.send('update response from user router')
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})
router.delete('/delete/:id',(req,res)=>{
    // res.send('delete response from user router')
    Model.findByIdAndDelete(req.params.id,{new:true})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})
//getAll
//getbyid
//update
//delete
module.exports = router;