const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index');
})
app.get('/card', (req, res) => {
  res.render('card', {prompt: 'java == javaScript', hint: "answer is a boolean"});
})

app.listen(3000, () => {console.log('the app is running on port 3000')});
