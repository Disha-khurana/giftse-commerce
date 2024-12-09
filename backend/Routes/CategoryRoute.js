const express = require('express');

const router = express.Router();
const { addCategory, getCategories, getCategory } = require('../controller/categoryController'); 

router.get('/',getCategories);
router.get('/:slug',getCategory);
router.post('/', addCategory);


module.exports = router;
