var express = require('express');
var path = require('path');
var examples = require('./lib/examples');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var exampleContent = [];
examples.getImages().then(function(content){
  exampleContent = content;
});

app.get('/', function(req, res){
  res.render('index', { examples : exampleContent });
});

app.get('/example/:dir', function(req, res){
  res.render('example', {
    directory : 'M_1_4_01',
    image : 'M_1_4_01.png'
  });
});

module.exports = app;
