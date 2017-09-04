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
// To Do:
// a title
// a body (the code)
// optional notes
// a language
// tags -- that is, user-defined words or phrases that classify the code, like "authentication", "front-end", "middleware", or "database".
// Your application must:
//
// Tests are optional.
//
// have registration and login
// allow you to create a snippet
// allow you to see a list of all your snippets
// allow you to see a list of all your snippets for a specific language
// allow you to see a list of all your snippets for a specific tag
// allow you to look at an individual snippet
