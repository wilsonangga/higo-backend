const mongoose = require('mongoose');

const Answer = mongoose.Schema({
    name: String,
    answer: [String],
})

module.exports = mongoose.model("Answer", Answer)