const Question = require('../models/question');

const seedData = require('./seeds.json');

Question.deleteMany({})
    .then(() => {
        return Question.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })