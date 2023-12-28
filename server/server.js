import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import articleRoutes from "./routes/article.js";
import paypalRoutes from "./routes/paypal.js";

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

app.use("/api" ,paypalRoutes)

app.get("/", function (res, req) {
  req.json({ data: "hello" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
