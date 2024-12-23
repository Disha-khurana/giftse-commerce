const mongoose = require('mongoose')

const offerslideSchema = new mongoose.Schema({
    image: {
        type: String,
        required:true
      },
      
      link: {
        type: String,
        required:true
      },
      
      slug: {
        type: String,
        required:true
      }, 
},{timestamps:true})

const OfferSlide = mongoose.model('OfferSlide',offerslideSchema)
module.exports = OfferSlide;