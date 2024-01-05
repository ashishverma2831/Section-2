//req s likhlo isko
const express = require('express');

//user router
const UserRouter = require('./router/userRouter') 

//initialize express
const app = express();
const port = 5000;


// middlewares
app.use(express.json());
app.use('/user',UserRouter);


//starting the server
app.listen(port,()=>{
    console.log(`Server started`);
})

//creating a route
app.get('/',(req,res)=>{
    res.send('response from express server')
})

app.get('/add',(req,res)=>{
    res.send('add response from express server')
})

app.get('/getall',(req,res)=>{
    res.send('get all response from express server')
})

app.get('/update',(req,res)=>{
    res.send('update response from express server')
})

app.get('/delete',(req,res)=>{
    res.send('delete response from express server')
})