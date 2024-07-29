const mongoose = require('mongoose');

 const connectToDb = () => {
    return mongoose.connect('mongodb+srv://rausskr6565:rauss6565@cluster0.5ivylol.mongodb.net/worldApp?retryWrites=true&w=majority&appName=Cluster0')
}
module.exports = { connectToDb };