module.exports = function(){

  const express = require('express');
  const bodyParser = require('body-parser');
  const favicon = require('serve-favicon');
  const functions = require('../functions/func')();
  var process = require('process');
  require('dotenv').config();
  const app = express();
  var port = process.env.PORT || 3000;

  app.set('view engine','ejs');
  app.set('views','./app/views');

  app.use(express.static('public'));
  app.use('/css', express.static('css'));
  app.use('/js', express.static('js'));
  app.use('/img', express.static('jpg'));  
  
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  app.use(require('body-parser').urlencoded({ extended: false }));

  app.use(favicon('./public/img/favicon.ico'))  

  app.use(function(req, res, next) {   
    res.locals.query = req.query;
    res.locals.url   = req.originalUrl;
    next();
  });

  app.disable('x-powered-by');

  var rotas = require('../app/routes/index');
  rotas(app);

  app.listen(port, function(){
    console.log("server on port:", port);
  });

};