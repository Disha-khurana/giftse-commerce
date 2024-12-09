const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProduct } = require('../controller/productcontroller'); 

router.post('/', addProduct);
router.get('/',getProducts);
router.get('/:slug',getProduct);

module.exports = router;
