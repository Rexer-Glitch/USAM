const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Missing token" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // If the token is valid, add the user data to the request object for further use
    req.userId = decoded.userId;
    next();
  });
};

module.exports = isAuthenticated;
