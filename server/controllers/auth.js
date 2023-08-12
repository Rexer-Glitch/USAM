const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Controller for user sign-up
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(409)
        .json({ message: "Please provide a username, email and password" });
    }
    // Check if the email or username is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or username already in use" });
    }

    // Create the new user and save to the database
    const newUser = new User({ email, username, password });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ accessToken: token, user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
    console.log(err);
  }
};

// Controller for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "There is no account with this email" });
    }

    // Compare the password with the hashed password in the database
    user.comparePassword(password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create a JWT token and send it as the response
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ accessToken: token, user: user });
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.usernameExists = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(200).json({ result: false });
    } else {
      res.status(200).json({ result: true });
    }
  } catch (err) {
    res.status(500).json({ result: true, message: "Server error" });
  }
};
