const Images = require('../models/Images');

const setImages = async (req, res) => {
    try {
        const data = req.body;
        //check if array
        if (!Array.isArray(data)) {
            return res.status(400).send('The input should be an array.')
        }

        //check existing slug present
        const existingImage = await Images.find({ slug: { $in: data.map(item => item.slug) }});
        if (existingImage.length > 0) {
            const duplicates = existingImage.map(item => item.slug);
            console.log('duplicates found')
            return res.status(400).send('Already exists')
        }

        //add new images
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

module.exports = {setImages}