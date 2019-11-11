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



module.exports = router;