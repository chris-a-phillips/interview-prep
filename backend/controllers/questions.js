const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// CRUD
// index
router.get('/', (req, res, next) => {
	Question.find({})
		.then((questions) => {
			res.json(questions);
		})
		.catch(console.error);
});

// show
router.get('/:id', (req, res, next) => {
	Question.findById(req.params.id)
		.then((question) => {
			res.json(question);
		})
		.catch(next);
});

// create
router.post('/', (req, res, next) => {
	Question.create(req.body)
		.then((question) => {
			res.json(question);
		})
		.catch(next);
});

// update
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	Question.findOneAndUpdate(
		{ _id: id },
		{
			prompt: req.body.prompt,
			answer: req.body.answer,
			category: req.body.category,
			topic: req.body.topic,
			resource: req.body.resource,
			example: req.body.prompt,
		},
		{ new: true }
	)
		.then((question) => {
			res.json(question);
		})
		.catch(next);
});

// delete
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Question.findOneAndRemove({ _id: id })
		.then((question) => {
			res.json(question);
		})
		.catch(next);
});

// filter by category
router.get('/category/:category', (req, res, next) => {
	const category = req.params.category;
	Question.find({ category: category })
		.then((questions) => {
			res.json(questions);
		})
		.catch(next);
});

module.exports = router;
