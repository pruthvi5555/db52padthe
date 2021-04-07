var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fans', { title: 'Search Results fans' });
});

module.exports = router;
