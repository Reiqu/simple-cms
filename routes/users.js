var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('select api');
});
router.get('/status', function(req, res, next) {
  res.send('not implemented yet')
});
module.exports = router;
