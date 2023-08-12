const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
});

// Format the date before saving
articleSchema.pre("save", function (next) {
  const formattedDate = formatDate(this.date);
  console.log(formattedDate);
  this.date = formattedDate;
  next();
});

// Format date function
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
