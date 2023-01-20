// Mongoose
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/CodeChef');
var mongoDB = mongoose.connection;
mongoDB.on('connected', function() {
    console.log('database is connected successfully');
});
mongoDB.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
mongoDB.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoDB;

