const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://User1:Password1@cluster0-1rc33.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema ({
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

module.exports = {
  User,
}