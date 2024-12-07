const Category = require('../models/Categories');

const addCategory = async (req, res) => {
  try {
    const categoryData = req.body;

    if (!categoryData.name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    const existingProduct = await Category.findOne({ name: categoryData.name });

    if (existingProduct) {
      console.log('Category already exists');
      return res.status(400).send('Category already exists');
    }

    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();

    console.log('Category saved');
    res.status(201).json({
      message: 'Category saved successfully',
      category: savedCategory,
    });
  } catch (error) {
    console.error('Error while saving category:', error);
    return res.status(500).json({ message: 'Error saving category' });
  }
};

const getCategories = async (req, res) => {
  try {
    const category = await Category.find({})
    res.json(category)
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" })
  }
}

const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug })
    if (!category) {
      return res.status(400).json({ message: 'Category not found' })
    }
    res.json(category)
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" })
  }
}



module.exports = { addCategory, getCategory, getCategories };


