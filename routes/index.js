var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.get('/signup',controllers.signup)
router.get('/login',controllers.login)
module.exports = router;
