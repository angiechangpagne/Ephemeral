// require db later
const User = require('../Model/userModel');

const userController = {};


userController.createUser = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next({ err: 'no user in data base' }); // fix error later?
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


// save to DB after login

userController.saveTopics = (req, res, next) => {
    // 
    const { id } = req.params // maybe from params?
    User.findById(id)
        .then((doc) => {
            User.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
            })
        })
        .catch(err => {
            return next(err);
        })


    res.locals.topics = data;
    return next()
}

// retrieve saved topics when logged in
// userController.getSavedTopics = (req, res, next) => {

// }

module.exports = userController;