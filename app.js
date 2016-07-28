'use strict'

const express = require('express');
const AnswerGenerator = require('./controllers/answer-generator');
const CompareNumber = require('./controllers/compare-number');
const JudeInput = require('./controllers/jude-input');
const bodyParser = require('body-parser');
const router = express();

router.use(bodyParser.json());

router.get('/answer', (req, res) => {
    res.send(AnswerGenerator.getAnswer());
});

router.post('/compare', (req, res) => {

    if(!JudeInput.jude(req.body.input)) {
        res.send('Cannot input duplicate numbers!');
    }

    res.send(CompareNumber.output(req.body.input, req.body.answer));
});

router.listen(3000, () => {
    console.log('server start');
})