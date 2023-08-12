const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const articleRoutes = require("./routes/article");

dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/auth", authRoutes);

app.use("/account", userRoutes);

app.use("/articles", articleRoutes);

app.get("/", function (res, req) {
  req.json({ data: "hello" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
