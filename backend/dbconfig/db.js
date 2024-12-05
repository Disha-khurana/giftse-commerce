const mongoose = require('mongoose');

//connection url
const mongoURL = 'mongodb://localhost:27017/products';

//connection establish
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected with mongodb server');
})

db.on('disconnected',()=>{
    console.log('disconnected with mongodb server');
})

db.on('error',(err)=>{
    console.error('Getting error',err);
})

module.exports = db;