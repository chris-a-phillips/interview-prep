const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
    prompt: String,
    answer: String,
    category: String,
    topic: [String],
    resource: String,
    example: String
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;