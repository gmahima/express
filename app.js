const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());
app.set('view engine', 'pug')
app.use((req,res,next) => {
  console.log('hi');
  req.message = 'this message';

  next();
});
app.use((req,res,next) => {
  console.log(req.message);

  next();
});


app.get('/', (req, res) => {
const name = req.cookies.username;
if (name) {
    res.render('index', {name});
}
else res.redirect('hello');

})
app.get('/card', (req, res) => {
  res.render('card', {prompt: 'java == javaScript', hint: "answer is a boolean"});

})
app.get('/hello', (req, res) => {
   // console.dir(req.body);
  const name = req.cookies.username;
  if (!name)
  res.render('hello');
  else res.redirect('/');
})
app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
})
app.post('/goodbye', (req, res) => {
  res.clearCookie("username");
 console.log('hi');
res.redirect('/hello');
})
app.use((req,res,next) => {
  const err = new Error('not found')
  err.status = 404;
  next(err);
});


app.use((err,req,res,next) => {
  res.locals.error = err;

  res.render('error', err);
  res.status(err.status);
})
app.listen(3000, () => {console.log('the app is running on port 3000')});
