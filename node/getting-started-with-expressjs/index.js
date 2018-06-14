var express = require('express');
var app = express();

var fs = require('fs');
var _ = require('lodash');
var bodyParser = require('body-parser')

var users = [];

fs.readFile('users.json', { encoding: 'utf8' }, function(err, data) {
  if (err) throw err;

  JSON.parse(data).forEach(function(user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
    users.push(user);
  });
});

app.get('/', function(req, res) {
  const buffer = users
    .map(user => {
      return `<a href="${user.username}">${user.name.full}</a>`;
    })
    .reduce((acc, cur) => acc + '<br>' + cur);

  res.send(buffer);
});

app.get(/big.*/, function(req, res, next) {
  console.log('BIG USER ACCESS');
  next();
});

app.get(/.*dog.*/, function(req, res, next) {
  console.log('DOGS GO WOOF');
  next();
});

app.get('/:username', function(req, res) {
  var username = req.params.username;
  res.send(username);
});

var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});
