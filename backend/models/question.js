const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
	prompt: { type: String, required: true },
	answer: { type: String, required: true },
	category: String,
	// frontend, backend, whiteboard, behavioral, code-challenge
	topic: { type: [String], required: true },
	resource: { type: String, required: true },
	example: String,
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;