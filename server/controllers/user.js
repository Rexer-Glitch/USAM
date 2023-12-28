import User from "../models/user.js";

export const profile = async function (req, res) {
  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      profile: {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
};
