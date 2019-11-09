// require DB later
const fetch = require('node-fetch');

const newsController = {}

// fetch articles

newsController.fetchNews = (req, res, next) => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=` + process.env.API_KEY)
        .then(data => data.json())
        .then(result => {
            // console.log(`RESULT FROM CONTROLLER: `, res);
            res.locals.data = result.response.docs; // array of objects, one for each article
            return next();
        }) // store into res.locals
        .catch(err => {
            // console.log(err);
            return next(err);
        }) // call next()
}


module.exports = newsController;