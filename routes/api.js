var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/topics', userController.createUser, (req, res, next) => {
    console.log(`USER CREATED`)
    res.sendStatus(200)
})
// // createUser --> get saved topics and fetch for each topic 
router.get('/topics/:id', userController.getTopicsAndFetch, (req, res, next) => {
    console.log(`SENT BACK A RESPONSE WITH API DATA`)
    // send article url/abstract to front end
    res.status(200).json({
        data: [...res.locals.articleArr]
    })
})

// user login and POST to save topics
router.post('/topics/:id', userController.saveTopic, (req, res, next) => {
    // console.log(`========INSIDE ROUTER.POST()=========`)
    console.log(`POST TO /API/TOPICS/:ID`)
    res.status(200).send({ msg: 'Topic saved!' })
})




module.exports = router;
