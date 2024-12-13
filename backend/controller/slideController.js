const Slide = require('../models/Slide')

const addImage = async(req,res)=>{
    try {
        const data = req.body;
        const existingImage = await Slide.findOne({ image: data.image });
        if (existingImage) {
          console.log('Image already exists');
          return res.status(400).send('Image already exists');
        }
        const newSlide = new Slide(data);
        await newSlide.save();
        console.log(newSlide)
        console.log('Image saved');
        res.status(201).send('Image saved successfully');
      } catch (error) {
        console.error('Error while saving image:', error);
        res.status(500).send('Error saving image');
      } 
}

const getImage = async(req,res)=>{
  try{
    const image = await Slide.find({})
    res.json(image)
  }catch(error){
    console.error(error);  
    res.status(500).json({ message: 'Internal server error' }); 
  }
}

module.exports = {addImage , getImage};