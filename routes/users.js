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
  const { id } = req.params;
  User.findById(id)
    .then(userDoc => {
      if (!userDoc) return res.render('/signup');
      res.status(200).json(userDoc);
      return next()
    })
    .catch(err => next(err))
})
// delete topic
router.delete('/topics/:id', (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then(doc => {
      //let update = { topics: req.body.topics }
      //let doc = await User.findOneAndUpdate({ _id: id }, update);
      User.save((err, doc) => {
        if (err) return next(err)
      })
    })
    .catch(err => next(err))
})


module.exports = router;
