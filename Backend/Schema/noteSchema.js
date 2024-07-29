const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    discription: String,
    category: {
        type: [String],
        enum: ['Home', 'Work', 'Personal'], // Replace with your actual options
        required: true,
        validate: {
            validator: function (arr) {
                // Check if the array contains only valid options
                return arr.every(item => ['Home', 'Work', 'Personal'].includes(item));
            },
            message: 'Category must contain only specified options.'
        }
    },
    userId: mongoose.Schema.Types.ObjectId
}
  
)
const noteModel = mongoose.model('Note', noteSchema);
module.exports = { noteModel };