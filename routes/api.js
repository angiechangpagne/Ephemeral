var express = require('express');
var router = express.Router();
require('dotenv').config()
const newsController = require('../controllers/newsController');
const userController = require('../controllers/userController');

router.get('/topics', newsController.fetchNews, (req, res, next) => {
    //console.log(res.locals.data)
    res.status(200).json({
        data: [...res.locals.data]
    })
})

// router.post('/topics', userController.saveTopics, (req, res, next) => {
//     console.log(`========INSIDE ROUTER.POST()=========`)

//     res.status(200).json({
//         topics: [...res.locals.topics]
//     })
// })

router.get('/test', (req, res, next) => {
    res.status(200).json({
        topics: ['js', 'codesmith']
    })
})


// save
// update
//delete routes

module.exports = router;