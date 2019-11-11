const mongoose = require('mongoose');
require('dotenv');

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// user schema --> holds topics (categories) & saved articles for individual users

const userSchema = new Schema({
  topics: [
    {
      type: String
    }
  ],
  savedArticles: [
    {
      type: String
    }
  ],
})

const User = mongoose.model('user', userSchema);

// resources schema --> holds all the api keys for multiple sources

const resourcesSchema = new Schema({

})

const Resources = mongoose.model('resource', resourcesSchema);

module.exports = {
  User,
  Resources,
}