const express = require("express");
const { addOfferImage, getOfferImage, updateOfferImages, deleteOfferImage } = require("../controller/offerSlideController");

const router = express.Router();

router.post('/',addOfferImage);
router.get('/',getOfferImage);
router.put('/:slug',updateOfferImages);
router.delete('/:slug',deleteOfferImage);

module.exports = router;