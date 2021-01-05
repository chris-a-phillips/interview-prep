const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', (req, res, next) => {
    Question.find({})
        .then((questions) => {
            res.json(questions)
        })
        .catch(console.error)
})

module.exports = router