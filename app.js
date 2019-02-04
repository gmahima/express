const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');





const mainRoutes = require('./routes')
app.use(mainRoutes);
const cardRoute = require('./routes/cards')
app.use('/cards',cardRoute);
// app.use((req,res,next) => {
//   console.log('hi');
//   req.message = 'this message';
//
//   next();
// });
// app.use((req,res,next) => {
//   console.log(req.message);
//
//   next();
// });


// app.use((req,res,next) => {
//   const err = new Error('not found')
//   err.status = 404;
//   next(err);
// });


app.use((err,req,res,next) => {
  res.locals.error = err;

  res.render('error', err);
  res.status(err.status);
})
app.listen(3000, () => {console.log('the app is running on port 3000')});
