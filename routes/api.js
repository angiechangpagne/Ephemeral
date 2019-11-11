var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');


// // createUser --> get saved topics and fetch for each topic 
router.get('/topics/:id', userController.createUser, userController.getTopicsAndFetch, (req, res, next) => {

    // send article url/abstract to front end
    res.status(200).json({
        data: [...res.locals.articleArr]
    })
})

// user login and POST to save topics
router.post('/topics/:id', userController.saveTopic, (req, res, next) => {
    // console.log(`========INSIDE ROUTER.POST()=========`)
    res.status(200).send({ msg: 'Topic saved!' })
})




module.exports = router;
