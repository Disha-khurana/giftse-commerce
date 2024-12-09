const express = require('express');
const router = express.Router();
const { addImage, getImage } = require('../controller/slideController'); 

router.post('/', addImage);
router.get('/',getImage);

module.exports = router;
