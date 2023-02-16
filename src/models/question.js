const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: { type: String },
    description: { type: String },
    options: {type: [{
        id: { type: String },
        optionDescription: { type: String },
        isWriteAnswer: { type: Boolean, default: false }
    }]},
    category: String
});

module.exports = mongoose.model('Question', questionSchema);