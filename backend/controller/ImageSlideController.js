const Images = require('../models/Images');

const setImages = async (req, res) => {
    try {
        const data = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).send('The input should be an array.')
        }

        const existingImage = await Images.find({ slug: { $in: data.map(item => item.slug) }});
        if (existingImage.length > 0) {
            const duplicates = existingImage.map(item => item.slug);
            console.log('duplicates found')
            return res.status(400).send('Already exists')
        }

        const images = data.map(item => new Images(item));
        const InsertImages = await Images.insertMany(images);
        res.status(201).json({
            message: "Images saved successfully",
            images: InsertImages
        })
    } catch (error) {
        console.error('Error while saving images:', error);
        res.status(500).send('Error saving images');
    }
}

const getImages =async (req,res)=>{
    try{
        const data = await Images.find({})
        res.json(data)
    }catch(error){
        console.error(error)
        res.status(500).send('Error while fetching images')
    }
}

const updateImages = async(req,res)=>{
    try{
        let updatedImage = await Images.findOneAndUpdate(
            {slug:req.params.slug},
            {$set:req.body},
            {new:true, runValidators:true}
        );

        if(!updatedImage){
            updatedImage = new Images({slug:req.params.slug, ...req.body})
            await updatedImage.save();

            return res.status(201).json({
                message:"New image added.",
                updatedImage
            });
        }

        res.status(200).json({
            message:"Image updated successfully",
            updatedImage
        })

    }catch(err){
        console.log(err)
        res.status(500).json({message:'Internal server error'})
    }
}

const deleteImages = async(req,res)=>{
    try{
        const deleteImage = await Images.findOneAndDelete({slug:req.params.slug})

        if(!deleteImage){
            return res.status(404).json({message:'Image not found.'})
        }
        res.status(200).json({
            message:"Image deleted successfully"
        })
    }catch(err){
        console.error(err)
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {setImages,getImages,updateImages, deleteImages}