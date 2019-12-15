var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/dash');
});
router.get('/dash', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('addpage', {title: 'add new page' });
});
router.post('/create', function(req, res, next) {
  console.log('called create post')
  res.redirect('/');
});
module.exports = router;
