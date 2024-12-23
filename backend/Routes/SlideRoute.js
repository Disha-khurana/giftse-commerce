const express = require('express');
const router = express.Router();
const { addImage, getImage, updateImage, deleteImage } = require('../controller/slideController'); 

router.post('/', addImage);
router.get('/',getImage);
router.put('/:slug',updateImage);
router.delete('/:slug',deleteImage);

module.exports = router;
