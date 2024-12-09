const mongoose = require('mongoose')

const slideSchema = new mongoose.Schema({
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
})

const Slide = mongoose.model('Slide',slideSchema)
module.exports = Slide;