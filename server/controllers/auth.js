const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Controller for user sign-up
exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    console.log(req.body);
    // Check if the email or username is already taken
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or username already in use" });
    }

    // Create the new user and save to the database
    const newUser = new User({ email, username, password });
    await newUser.save();

    // Send a success message
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
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
      res.status(200).json({ token });
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
