const express = require('express');
const router = express.Router()
const {data} = require('../data/flashcardData.json');
const {cards} = data;
const cardsLength = cards.length;
console.log(Math.floor(Math.random()*cardsLength));
//random card generator
router.get('/', (req,res) => {
const defaultSide = 'question';
const randomId = Math.floor(Math.random()*cardsLength);
res.redirect(`/cards/${randomId}?side=${defaultSide}`);
});
// specific id route
router.get('/:id', (req, res) => {
  const {side} = req.query;

  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {text, id, side}
  if (side =='answer') {
   templateData.notSide = 'question';
  }
  else {templateData.notSide = 'answer';}
  if (side == 'question') {
    templateData.hint = hint;
  }
  res.render('card',templateData);


})
module.exports = router;
