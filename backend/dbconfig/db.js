const mongoose = require('mongoose');
const Product = require('../models/Products'); 
require('../models/Categories')
require('../models/Slide')
require('../models/OfferSlide')
require('../models/Images')

mongoose.connect('mongodb://localhost:27017/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
    


  module.exports=db; 
