// require db later
const User = require('../Model/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
    const { userid } = req.body;
    if(!userid) {
        return next({err: 'no user in data base'}); // fix error later?
    }
    User.create({ userid })
    .then(createdUser => {
        res.locals.userid = createdUser._id;
        return next();
    })
    .catch(err => {
        return next(err);
    }) 
}

userController.saveTopics = (req, res, next) => {
    const data = ['politics', 'technology', 'sports', 'education']
    res.locals.topics = data;
    return next()
}

module.exports = userController;