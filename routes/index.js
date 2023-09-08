var express = require('express');
var router = express.Router();
var Question = require('../question')
var Answer = require('../answer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', async function (req, res, next) {
  const question = await Question.find();
  return res.json(question)
});

router.get('/question/:id', async function (req, res, next) {
  const question = await Question.findById(req.params.id);
  return res.json(question)
});

router.put('/question/:id', async function (req, res, next) {
  try {
    const questionId = req.params.id;
    const updatedData = req.body; // Assuming you send the updated data in the request body

    // Find the question by ID and update it
    const updatedQuestion = await Question.findByIdAndUpdate(questionId, updatedData, { new: true });

    if (!updatedQuestion) {
      return res.status(404).json({ error: 'Question not found' });
    }

    return res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.post('/question', async function (req, res, next) {
  const question = await Question(req.body).save();
  return res.json(question)
});

router.get('/answer', async function (req, res, next) {
  const answer = await Answer.find();
  return res.json(answer)
});

router.get('/answer/:id', async function (req, res, next) {
  const answer = await Answer.findById(req.params.id);
  return res.json(answer)
});

router.post('/answer', async function (req, res, next) {
  const answer = await Answer(req.body).save();
  return res.json(answer)
});

module.exports = router;