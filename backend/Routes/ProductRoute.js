// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { addProduct } = require('../controller/productcontroller'); 
// Route to add a new product
router.post('/', addProduct);

module.exports = router;
