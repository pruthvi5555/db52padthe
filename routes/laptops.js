var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('laptops', { title: 'laptop Center' });
});

module.exports = router;
