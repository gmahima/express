const express = require('express');
const router = express.Router()
const {data} = require('../data/flashcardData.json');
const {cards} = data;
let notSide;
router.get('/:id', (req, res) => {
  const {side} = req.query;
  if (side =='question') {
   notSide = 'answer';
  }
  else {notSide = 'question';}
  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {text, id, side, notSide}
  if (side == 'question') {
    templateData.hint = hint;
  }
  res.render('card',templateData);


})
module.exports = router;
