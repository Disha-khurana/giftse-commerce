const Slide = require('../models/Slide1')

const addImage = async(req,res)=>{
    try {
        const data = req.body;
        const existingImage = await Slide.findOne({ slug: data.slug });
        if (existingImage) {
          console.log('Image already exists');
          return res.status(400).send('Image already exists');
        }
        const newSlide = new Slide(data);
        await newSlide.save();
        console.log('Image saved');
        res.status(201).send('Image saved successfully');
      } catch (error) {
        console.error('Error while saving image:', error);
        res.status(500).send('Error saving image');
      } 
}

module.exports = {addImage}