const Product = require('../models/Products'); 

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const existingProduct = await Product.findOne({ slug: data.slug });
    if (existingProduct) {
      console.log('Product already exists');
      return res.status(400).send('Product already exists');
    }

    const newProduct = new Product(data);
    await newProduct.save();
    console.log('Product saved');
    res.status(201).send('Product saved successfully');
  } catch (error) {
    console.error('Error while saving product:', error);
    res.status(500).send('Error saving product');
  }
};


const getProducts = async(req,res)=>{ 
  try {
    const products = await Product.find({});    
    res.json(products);  
  } catch (error) {
    console.error(error);  
    res.status(500).json({ message: 'Internal server error' });  
  }
}

const getProduct = async(req,res)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug});
    if(!product){
      res.status(400).json({message:'Product not found'})
    }
    res.json(product)
  }catch(error){
    res.status(500).json({message:"Internal server error"});
  }
}


module.exports = { addProduct ,getProducts ,getProduct};
