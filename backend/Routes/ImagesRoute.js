const express = require('express');
const { setImages, updateImages, deleteImages } = require('../controller/ImageSlideController');
const{getImages} = require('../controller/ImageSlideController')

const router = express.Router();

router.post('/',setImages);
router.get('/',getImages);
router.put('/:slug',updateImages);
router.delete('/:slug',deleteImages);

module.exports = router;