const express = require('express');
const app = express();
const routes = require('./server/router')

const rateLimit = require('express-rate-limit')


//middlewares


const apiLimiter = rateLimit({
  windowMs: 5000, // 5 seconds
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later"
});
app.use('/', apiLimiter);
app.use('/', routes);

module.exports = app;