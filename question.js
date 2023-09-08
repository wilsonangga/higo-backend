const mongoose = require('mongoose');

const Question = mongoose.Schema({
    question: String,
})

module.exports = mongoose.model("Question", Question)