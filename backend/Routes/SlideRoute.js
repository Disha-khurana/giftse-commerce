const express = require('express');
const router = express.Router();
const { addImage } = require('../controller/slideController'); 

router.post('/slide', addImage);
// router.get('/slide',getSlide);

module.exports = router;
