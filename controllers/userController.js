// require db later

const userController = {};

userController.saveTopics = (req, res, next) => {
    const data = ['politics', 'technology', 'sports', 'education']
    res.locals.topics = data;
    return next()
}

module.exports = userController;