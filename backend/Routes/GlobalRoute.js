const express = require('express');
const {globalData} = require('../controller/globalController')
const{getGlobalData} = require('../controller/globalController')

const router = express.Router();
router.post('/', globalData)
router.get('/',getGlobalData)

module.exports = router;