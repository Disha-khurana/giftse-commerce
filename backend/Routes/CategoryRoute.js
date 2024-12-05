// routes/categoryRoutes.js
const express = require('express');

const router = express.Router();
const { addCategory } = require('../controller/categoryController'); // Adjust the path as needed

// Route to add a new category
router.post('/', addCategory);

module.exports = router;
