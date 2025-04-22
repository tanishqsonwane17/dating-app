var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user')
const dbConnection = require('../config/db')
// let user = require('../controllers/user')

dbConnection()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post('/CYP',controllers.CYP)
router.post('/interest',controllers.interest)
router.post('/profile',controllers.profile)
module.exports = router;
