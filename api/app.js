// Constante globale
console.log('Répertoire de base:' + __dirname);
global.__basedir = __dirname;

// Gestion des imports
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

// import des routeurs

const productRouter = require('./routes/product-routeur');
// Création de l'application
let app = express();


// Middlewares de base
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connextion a MongoDB
mongoose.connect('mongodb://localhost/fulljs');
let database = mongoose.connection;
database.on('error',(err)=> console.log('[mongoose]: connection a MongoDB: échouée'));
database.once('open',()=> console.log('[mongoose]: connection a MongoDB: réussie'));

//Routage
app.use('/api/products', productRouter);

// Gestion des erreurs 404:
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
