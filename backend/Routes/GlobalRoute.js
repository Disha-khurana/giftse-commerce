const express = require('express');
const {globalData, updateGlobalData, deleteData} = require('../controller/globalController')
const{getGlobalData} = require('../controller/globalController')

const router = express.Router();
router.post('/', globalData)
router.get('/',getGlobalData)
router.put('/:title',updateGlobalData)
router.delete('/:title',deleteData)

module.exports = router;