const offerSlide = require('../models/OfferSlide')

const addOfferImage = async (req, res) => {
    try {
        const data = req.body;  
        if (!Array.isArray(data)) {
            return res.status(400).send('The input data should be an array of images.');
        }

        const existingSlugs = await offerSlide.find({ slug: { $in: data.map(item => item.slug) } });

        if (existingSlugs.length > 0) {
            const duplicateSlugs = existingSlugs.map(item => item.slug);
            console.log('Duplicate slugs found:', duplicateSlugs);
            return res.status(400).send(`Images with the following slugs already exist: ${duplicateSlugs.join(', ')}`);
        }

        const slides = data.map(item => new offerSlide(item));

        const savedImages = await offerSlide.insertMany(slides);

        console.log('Images saved:', savedImages);

        res.status(201).json({
            message: "Images saved successfully",
            images: savedImages
        });
    } catch (error) {
        console.error('Error while saving images:', error);
        res.status(500).send('Error saving images');
    }
};


const getOfferImage = async (req, res) => {
    try {
        const offer = await offerSlide.find({});
        res.json(offer)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { addOfferImage,getOfferImage }