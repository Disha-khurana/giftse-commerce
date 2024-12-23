const express = require('express');
const { signupUser,getUser, loginUser } = require('../controller/loginController');
const router = express.Router();

router.post('/signup',signupUser);
router.get('/signup',getUser);
router.post('/login',loginUser);


module.exports = router;