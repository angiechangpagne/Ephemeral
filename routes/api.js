var express = require('express');
var router = express.Router();
require('dotenv').config()
const newsController = require('../controllers/newsController');
const userController = require('../controllers/userController');
const User = require('../Model/userModel');

// createUser --> userController.findUserDoc -> fetchNews 
router.get('/topics', newsController.fetchNews, (req, res, next) => {
    //console.log(res.locals.data)

    // user saves topics
    res.status(200).json({
        data: [...res.locals.data]
    })
})

router.post('/topics/:id', userController.saveTopics, (req, res, next) => {
    // console.log(`========INSIDE ROUTER.POST()=========`)

    res.status(200).json({
        topics: [...res.locals.topics]
    })
})

module.exports = router;