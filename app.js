const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Snippet = require('./models/snippet.js');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/snippets');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.render('index');
})
// app.get('/snippets', function(req, res) {
//   models.User.findAll()
//     .then(function(users) {
//       res.render('users', {
//         userskey: users
//       })
//     })
// })
// app.get('/new_user', function(req, res) {
//   res.render('new_user')
// })
// app.get('/update/:id', function(req, res) {
//   models.User.findById(req.params.id)
//     .then(function(users) {
//       res.render('update', {userskey: users})
//       // console.log(user);
//     })
// })
//
// app.post('/create_user', function(req, res) {
//   const userToCreate = models.User.build({
//     name: req.body.name,
//     email: req.body.email,
//     bio: req.body.bio
//   });
//   userToCreate.save().then(function() {
//     res.redirect('/users');
//   })
// })
//
// app.post('/delete_user/:idOfTheUser', function(req, res) {
//   // console.log('the id is: ' + req.params.idOfTheUser);
//   models.User.destroy({
//       where: {
//         id: req.params.idOfTheUser
//       }
//     })
//     .then(function() {
//       res.redirect('/users')
//     })
// })
//
// app.post('/update/:idOfTheUser', function(req, res) {
//   const userToUpdate = models.User.update({
//     name: req.body.name,
//     email: req.body.email,
//     bio: req.body.bio
//   },{where: {id: req.params.idOfTheUser}})
//     .then(function() {
//       res.redirect('/users')
//     })
// })





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
