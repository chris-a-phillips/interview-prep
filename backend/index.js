const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const questionsController = require('./controllers/questions')
app.use('/api/questions', questionsController);



app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
    console.log(`🚀 PORT: ${app.get('port')} 🚀`);
})