var express = require('express');
const fan_controlers= require('../controllers/fan');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
   return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
 }

/* GET fan. */
router.get('/', fan_controlers.fan_view_all_Page ); 
/* GET update fan page */
router.get('/update', fan_controlers.fan_view_one_Page);
router.get('/create',secured,  fan_controlers.fan_create_Page);
router.get('/delete',secured, fan_controlers.fan_delete_Page);
module.exports = router;
