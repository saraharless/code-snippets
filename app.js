const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Snippet = require('./models/snippet.js');

mongoose.Promise = require('bluebird');
let url = 'mongodb://localhost:27017/list';
mongoose.connect(url);
const ObjectId = require('mongodb').ObjectID;
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({
  extended: false
}))









app.listen(3000, function() {
  console.log('you did it, or something');
})


//////////////////////////////////////////////////////
To Do:
