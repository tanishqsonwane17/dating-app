const User = require("../models/user-Model");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, gender, age, city, bio, interests } =
      req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "Email already registered.");
      return res.redirect("/signup");
    }

    const newUser = new User({
      name,
      email,
      password,
      gender,
      age,
      city,
      bio,
      interests: interests ? interests.split(",") : [],
    });

    await newUser.save();
    req.flash("success", "Account created successfully!");
    res.redirect("/CYP");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong!");
    res.redirect("/signup");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      req.flash("error", "User not found.");
      return res.redirect("/login");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      req.flash("error", "Incorrect password.");
      return res.redirect("/login");
    }

    // You can store user info in session here
    req.session.userId = user._id;

    req.flash("success", `Welcome back ${user.name}`);
    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    req.flash("error", "Login failed!");
    res.redirect("/login");
  }
};
exports.CYP = (req, res) => {
  const{name,email,password} = req.body
  User.create({
     name : name,
     email : email,
     password:password
  })
  res.render("CYP");
};
exports.interest = (req, res) => {
  res.render("interest");
};
exports.profile = (req, res) => {
  res.render("profile");
};
