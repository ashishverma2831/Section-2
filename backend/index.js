//req s likhlo isko
const express = require('express');
const cors = require('cors');

//user router
const UserRouter = require('./router/userRouter') 
const PostRouter = require('./router/postRouter')
const ProductRouter = require('./router/productRouter')
const OrderRouter = require('./router/orderRouter')

//initialize express
const app = express();
const port = 5000;


// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use('/user',UserRouter);
app.use('/post',PostRouter);
app.use('/product',ProductRouter);
app.use('/order',OrderRouter);


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