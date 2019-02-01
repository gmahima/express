const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index');
})
app.get('/card', (req, res) => {
  res.render('card', {prompt: 'java == javaScript', hint: "answer is a boolean"});
})
app.get('/hello', (req, res) => {
   // console.dir(req.body);
  res.render('hello', {name: req.cookies.username});

})
app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.render('hello', {name: req.body.username});
})
app.listen(3000, () => {console.log('the app is running on port 3000')});
