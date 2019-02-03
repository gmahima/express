const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
const name = req.cookies.username;
if (name) {
    res.render('index', {name});
}
else res.redirect('hello');

})
router.get('/card', (req, res) => {
  res.render('card', {prompt: 'java == javaScript', hint: "answer is a boolean"});

})
router.get('/hello', (req, res) => {
   // console.dir(req.body);
  const name = req.cookies.username;
  if (!name)
  res.render('hello');
  else res.redirect('/');
})
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
})
router.post('/goodbye', (req, res) => {
  res.clearCookie("username");
res.redirect('/hello');
})
module.exports = router;
