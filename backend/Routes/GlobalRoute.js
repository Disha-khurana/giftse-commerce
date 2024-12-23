const express = require('express');
const {globalData, updateGlobalData, deleteData} = require('../controller/globalController')
const{getGlobalData} = require('../controller/globalController')

const router = express.Router();
router.post('/', globalData)
router.get('/',getGlobalData)
router.put('/:slug',updateGlobalData)
router.delete('/:slug',deleteData)

module.exports = router;