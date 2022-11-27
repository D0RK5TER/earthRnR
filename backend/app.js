const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
  }));

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && 'Lax',
      httpOnly: true
    }
  }));

const routes = require('./routes');
app.use(routes);

const { ValidationError } = require('sequelize');
/////////////////Error Handling/////////////////////////
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = 'Resource Not Found';
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});
//sequlize errors//
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);

    if (err.errors.includes('email must be unique')) {
      err.message = 'User already exists'
      err.status = 403
      err.errors = { 'email': 'User with that email already exists' }
    }
    else if (err.errors.includes('username must be unique')) {
      err.message = 'User already exists'
      err.status = 403
      err.errors = { 'email': 'User with that username already exists' }
    } else if (err.errors.includes('Please provide a valid address')) {
      err.message = 'User already exists'
      err.status = 403
      err.errors = { 'email': 'User with that username already exists' }
    }
    next(err);
  } else next(err)
});
//error formatter//
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    statusCode: err.status,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});

module.exports = app;

