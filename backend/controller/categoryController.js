// controllers/categoryController.js
const Category = require('../models/Categories'); // Adjust the path as needed

// Controller function to add a category
const addCategory = async (req, res) => {
  try {
    const categoryData = req.body;

    // Validate required fields
    if (!categoryData.name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    // Create and save the new category
    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();

    console.log('Category saved:', savedCategory);
    res.status(201).json({
      message: 'Category saved successfully',
      category: savedCategory,
    });
  } catch (error) {
    console.error('Error while saving category:', error);
    res.status(500).json({ message: 'Error saving category' });
  }
};

module.exports = { addCategory };


