var express = require('express');
const fan_controlers= require('../controllers/fan');
var router = express.Router();

/* GET home page. */
router.get('/', fan_controlers.fan_view_all_Page ); 

/* GET detail costume page */
router.get('/detail', fan_controlers.fan_view_one_Page);

/* GET create costume page */
router.get('/create', fan_controlers.fan_create_Page);

module.exports = router;
