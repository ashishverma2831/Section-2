const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
    res.send('add response from user router')
})

//getAll
//getbyid
//update
//delete
module.exports = router;