const express = require('express');
const router = express.Router();
const user = require('../controllers/user'); // ✅ path must be correct

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", user.signup);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", user.login);

router.get("/index", (req, res) => {
  res.render("index");
});

module.exports = router;
