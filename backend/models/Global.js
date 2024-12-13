const mongoose = require('mongoose')

const globalSchema = new mongoose.Schema({
        src: {
          type: String,
          description: "The path to the image file for the location."
        },
        title: {
          type: String,
          description: "The title or name of the location."
        },
        description: {
          type: String,
          description: "A short description of the location."
        },
        link: {
          type: String,
          description: "The URL to the detailed page about the location."
        }
      })

const GlobalSlide = mongoose.model('GlobalSlide',globalSchema)
module.exports = GlobalSlide