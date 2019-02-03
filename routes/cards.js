const express = require('express');
const router = express.Router()
const {data} = require('../data/flashcardData.json');
const {cards} = data;
const cardsLength = cards.length;
  const defaultSide = 'question';
console.log(Math.floor(Math.random()*cardsLength));
//random card generator
router.get('/', (req,res) => {

  const randomId = Math.floor(Math.random()*cardsLength);
  res.redirect(`/cards/${randomId}?side=${defaultSide}`);
});
// specific id route
router.get('/:id', (req, res) => {
  const name = req.cookies.username;
    const {id} = req.params;
  const {side} = req.query;
  if(!side) {
    return res.redirect(`/cards/${id}?side=${defaultSide}`);
  }

  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {text, id, side, name}
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
