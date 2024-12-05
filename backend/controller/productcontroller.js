// controllers/productController.js
const Product = require('../models/Products'); // Adjust the path as necessary

// Controller function to add a product
const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product(data);
    await newProduct.save();
    console.log('Product saved');
    res.status(201).send('Product saved successfully');
  } catch (error) {
    console.error('Error while saving product:', error);
    res.status(500).send('Error saving product');
  }
};


module.exports = { addProduct };
