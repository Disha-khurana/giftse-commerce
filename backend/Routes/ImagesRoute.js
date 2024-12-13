const express = require('express');
const { setImages } = require('../controller/ImageSlideController');
const{getImages} = require('../controller/ImageSlideController')

const router = express.Router();

router.post('/',setImages);
router.get('/',getImages)

module.exports = router;