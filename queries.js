var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(/*options*/);
var connectionString = 'postgres://maxik:000000@localhost:5432/postgres';

var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllNews: getAllNews,
  getSingleNews: getSingleNews,
  createNews: createNews,
  updateNews: updateNews,
  removeNews: removeNews
};

function getAllNews(req, res, next) {
  db.any('select * from news')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL news'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleNews(req, res, next) {
  var newsID = parseInt(req.params.id);
  db.one('select * from news where id = $1', newsID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE news'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createNews(req, res, next) {
  req.body.id_user = parseInt(req.body.id_user);
  db.none('insert into news(id_user, title, description)' +
      'values(${id_user}, ${title}, ${description})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one news'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateNews(req, res, next) {
  db.none('update news set title=$1, description=$2 where id=$3',
    [req.body.title, req.body.description, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated news'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function removeNews(req, res, next) {
  var newsID = parseInt(req.params.id);
  db.result('delete from news where id = $1', newsID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} news`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}