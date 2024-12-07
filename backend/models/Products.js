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

  category: {
    type: String,
    required: true,
    default : 'Anniversary'
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
  
  ingredients: [String],
  
  // productDetails: [
  //   {
  //     label: {
  //       type: String,
  //       enum: [
  //         "Cake_Flavour",
  //         "Shape",
  //         "Weight",
  //         "Net_Quantity",
  //         "Diameter",
  //         "Country_of_Origin",
  //         "Serves"
  //       ],
  //       required: true
  //     },
  //     value: {
  //       type: String,
  //       required: true
  //     }
  //   }
  // ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
