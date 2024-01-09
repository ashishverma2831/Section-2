const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    // const {name,email,password} = req.body
    new Model(req.body).save()
    .then((result) => {
        setTimeout(() => {
            res.json(result)
        }, 2000);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})
router.get('/getall',(req,res)=>{
    // res.send('get all response from user router')
    Model.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

// : denotes a url by parameter
router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    // res.send('Get by email response from user Router')

    Model.findOne({email:req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/getbylocation/:location',(req,res)=>{
    console.log(req.params.location);

    Model.find({location:req.params.location})
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



router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result)
            res.json(result);
        else 
            res.status(401).json({message:'Invalid Credentials'});
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