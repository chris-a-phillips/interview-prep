const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
	prompt: { type: String, required: true },
	answer: String,
	category: { type: String, required: true },
	// frontend, backend, whiteboard, behavioral, code-challenge
	topics: [String],
	resource: String,
	example: String,
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;