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
            console.log('err here in createUser')
            return next(err);
        }
    })
    return next();
}
// save topics to DB after login
userController.saveTopic = (req, res, next) => {
    const { topic } = req.body;
    const { id } = req.params;

    console.log(`save topic here`)
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
                            arr.push({
                                articleUrl: obj.web_url,
                                abstract: obj.abstract,
                                imgUrl: obj.multimedia.url
                            })
                        }); // array of objects, one for each article , push just url and abstract into arr

                        res.locals.articleArr = arr; // sent this back to front end in api.js

                    })
                    .catch(err => {
                        console.log('err here in catch in GET/Fetch')
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