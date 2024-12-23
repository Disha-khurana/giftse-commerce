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

const updateImage = async(req,res)=>{
  try{
    let updatedImg = await Slide.findOneAndUpdate(
      {slug:req.params.slug},
      {$set:req.body},
      {new:true, runValidators:true}
    );
    if(!updatedImg){
      updatedImg = new Slide({slug:req.params.slug, ...req.body})
      await updatedImg.save();

      return res.status(201).json({
        message:"New Slider image added.",
        updatedImg
      })
    }

    res.status(200).json({
      message:"Slider image updated successfully.",
      updatedImg
    })
  }catch(err){
    console.log(err)
    res.status(500).json({message:"Internal server error."})
  }
}

const deleteImage = async(req,res)=>{
  try{
    const deleteSlide = await Slide.findOneAndDelete({slug:req.params.slug})

    if(!deleteSlide){
      return res.status(200).json({message:'Slider image not found.'})
    }
    res.status(200).json({
      message:"Slider image deleted successfully."
    })

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Internal server error"})
  }
}

module.exports = {addImage , getImage , updateImage , deleteImage};