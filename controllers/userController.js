const models = require('../Model/userModel');
// const mongoose = require('mongoose')
require('dotenv').config();
const userController = {};
// console.log(User)

const ObjectId = require('mongoose').Types.ObjectId;


userController.createUser = (req, res, next) => {
    const { id } = req.params;
    if (id) return next();

    let objId = new ObjectId(id);
    models.User.create({ _id: objId },
        function (err, doc) {
            if (err) {
                console.log(err)
                return next(err)
            } else {
                console.log(doc)
                console.log(`saved`)
            }

        }
    )
    return next();
}
// save topics to DB after login
userController.saveTopic = (req, res, next) => {
    const { topic } = req.body;
    const { id } = req.params;

    //console.log(`Inside saveTopics ||| id: `, id, ' topic: ', topic)

    //const id = '5dc9de9f1c9d440000ee7598'; // for testing purposes
    let objId = new ObjectId(id);
    models.User.findOne({ _id: objId })
        .then(doc => {
            console.log(`DOC: `, doc)
            doc.topics = [...topics, topic]
            doc.save()
            return next()
        })
        .catch(err => {
            console.log(err)
            return next(err)
        })


    return next();

}

userController.getTopicsAndFetch = (req, res, next) => {
    const { id } = req.params;
    // find user
    models.User.findById(id)
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