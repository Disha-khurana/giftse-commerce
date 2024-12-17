const express = require('express');

const router = express.Router();
const { addCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controller/categoryController'); 

router.get('/',getCategories);
router.get('/:slug',getCategory);
router.post('/', addCategory);
router.put('/:slug',updateCategory);
router.delete('/:slug',deleteCategory);


module.exports = router;
