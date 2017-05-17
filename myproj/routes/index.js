var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/news', db.getAllNews);
router.get('/api/news/:id', db.getSingleNews);
router.get('/api/detail', db.getDetail);
router.post('/api/news', db.createNews);
router.post('/api/detail', db.sendIdNew);
router.post('/api/users', db.addUser);
router.put('/api/news/:id', db.updateNews);
router.delete('/api/news/:id', db.removeNews);
router.delete('/api/detail/:id', db.removeDetail);


module.exports = router;