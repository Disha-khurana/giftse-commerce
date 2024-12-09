const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
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

const Images = mongoose.model('Images',imageSchema)
module.exports = Images;