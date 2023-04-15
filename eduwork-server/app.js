const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { decodeToken } = require('./middleware/index');
const path = require('path');
const createError = require('http-errors');
const productRoute = require('./app/product/router');
const authRoute = require('./app/auth/router');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public/images/products')));
app.use(decodeToken());

app.use('/auth', authRoute);
app.use('/api', productRoute);

//home
app.use('/', (req, res) => {
  res.render('index', {
    title: 'Eduwork API Service',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
