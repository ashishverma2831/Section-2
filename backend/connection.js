const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@learningmern.byjriil.mongodb.net/learningmern?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('mongoose connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;

// asynchronous me then catch 
// ya async await

















// console.log('Hello');
// asynchronous function .connect, functions which depend on network
// setTimeout()