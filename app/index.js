var express = require('express');
var router = express.Router();
var list= express();

var db = require('../queries');

router.get('/api/news', db.getAllNews);
router.get('/api/news/:id', db.getSingleNews);
router.post('/api/news', db.createNews);
router.put('/api/news/:id', db.updateNews);
router.delete('/api/news/:id', db.removeNews);


module.exports = router;

list.listen(3000);