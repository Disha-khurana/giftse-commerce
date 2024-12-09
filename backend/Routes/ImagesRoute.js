const express = require('express');
const { setImages } = require('../controller/ImageSlideController');

const router = express.Router();

router.post('/',setImages);

module.exports = router;