const express = require("express");
const { addOfferImage, getOfferImage } = require("../controller/offerSlideController");

const router = express.Router();

router.post('/',addOfferImage);
router.get('/',getOfferImage)

module.exports = router;