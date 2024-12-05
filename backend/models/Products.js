const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: [String],
    required: false 
  },
  link: {
    type: String,
    required: true 
  },
  slug: {
    type: String,
    required: true 
  },
  title: {
    type: String,
    required: true 
  },
  price: {
    type: Number,
    required: true
},
rate: {
    type: Number,
    required: false
},
review: {
    type: String,
    required: false
},
  deliveryOption: {
    type: String,
    enum: ['Today', 'Tomorrow', 'Date'],
    required: false
  },
  deliveryDetails: [String], 
  personalisation: [String],
  notes: [String],
  storage: [String],
  flowers_trivia: [String],
  details: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

