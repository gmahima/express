const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
  res.render('card', {prompt: 'java == javaScript', hint: "answer is a boolean"});

})
module.exports = router;
