// require db later

const userController = {};
// save to DB after login
userController.saveTopics = (req, res, next) => {
    //
    res.locals.topics = data;
    return next()
}
// retrieve saved topics when logged in
userController.getSavedTopics = (req, res, next) => {

}

module.exports = userController;