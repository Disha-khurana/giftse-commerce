const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProduct } = require('../controller/productcontroller'); 

router.post('/products', addProduct);
router.get('/products',getProducts);
router.get('/product/:slug',getProduct);

module.exports = router;
