const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@mern-estate.byjriil.mongodb.net/learningmern?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('mongoose connected');
}).catch((err) => {
    console.error(err);
});

// asynchronous me then catch ya asyn await

















// console.log('Hello');
// asynchronous function .connect, functions which depend on network
// setTimeout()