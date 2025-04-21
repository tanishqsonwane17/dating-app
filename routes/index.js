var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user')
const dbConnection = require('../config/db')
dbConnection()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.get('/signup',controllers.signup)
router.get('/login',controllers.login)
router.post('/CYP',controllers.profile)
module.exports = router;
