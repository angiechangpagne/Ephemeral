var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const User = require('../Model/userModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
 
router.post('/topics/:id', userController.createUser, userController.saveTopics, (req, res, next) => {
  res.status(200).json({
    topics: [...res.locals.topics]
  })
})

router.get('/topics/:id', (req, res, next) => {
  const { id } = req.params.id;
  User.findById(id)
    .then(userDoc => {
      if (!userDoc) return res.render('/signup');
      res.status(200).json(userDoc);
      return next()
    })
    .catch(err => next(err))
})



module.exports = router;
