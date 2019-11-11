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

// router.post('/topics/:id', userController.saveTopics, (req, res, next) => {
//     // console.log(`========INSIDE ROUTER.POST()=========`)

//     res.status(200).json({
//         topics: [...res.locals.topics]
//     })
// })


router.get('/topics/:id', userController.getSavedTopics, (req, res, next) => {
    const urls = res.locals.savedTopics.map(topic => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=` + process.env.API_KEY)
            .then(data => data.json())
            .then(result => {
                //console.log(`RESULT FROM CONTROLLER: `, result);
                const resultArray = result.response.docs.map(obj => {
                    return [obj.web_url, obj.abstract]
                }); // array of objects, one for each article

            }) // store into res.locals
            .catch(err => {
                // console.log(err);
                return next(err);
            }) // call next()
    })

    res.status(200).json({
        articleUrls: [...urls]
    })
    return next();
})


module.exports = router;
