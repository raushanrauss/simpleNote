const mongoose = require('mongoose');
require('dotenv').config();
 const connectToDb = () => {
    return mongoose.connect(process.env.Url)
}
module.exports = { connectToDb };