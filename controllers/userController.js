const User = require('../Model/userModel');
require('dotenv').config();
const userController = {};


userController.createUser = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next({ err: 'no user in data base' }); // fix error later?
    }

    let newUser = new User();
    newUser.save(function (err) {
        if (err) {
            return next(err);
        }
    })
    return next();
}
// save topics to DB after login
userController.saveTopic = (req, res, next) => {
    const { topic } = req.body;
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id }, { topics: [...topics, topic] });

}

userController.getTopicsAndFetch = (req, res, next) => {
    const { id } = req.params;
    // find user
    User.findById(id)
        .then((doc) => {
            // loop over doc.topics
            // fetch for each topic
            doc.topics.forEach(topic => {
                fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=` + process.env.API_KEY)
                    .then(data => data.json())
                    .then(result => {
                        const arr = [];
                        result.response.docs.forEach(obj => {
                            arr.push([obj.web_url, obj.abstract])
                        }); // array of objects, one for each article , push just url and abstract into arr

                        res.locals.articleArr = arr; // sent this back to front end in api.js

                    })
                    .catch(err => {
                        return next(err);
                    })
            })

            return next();
        })
        .catch(err => {
            return next(err);
        })
}

module.exports = userController;