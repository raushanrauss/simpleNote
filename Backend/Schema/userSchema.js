const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min:3
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true
    },
    confirmPassword: {
        type: String,
        
    }
})
const userModel=mongoose.model("NotesUser",userSchema)
module.exports={userModel}