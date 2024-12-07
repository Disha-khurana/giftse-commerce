const express = require('express');

const router = express.Router();
const { addCategory, getCategories, getCategory } = require('../controller/categoryController'); 

router.get('/category',getCategories);
router.get('/category/:slug',getCategory);
router.post('/category', addCategory);


module.exports = router;
