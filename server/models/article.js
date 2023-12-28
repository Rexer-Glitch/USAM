import mongoose from "mongoose";

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
    ref: "User",
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  readBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      updatedDate: {
        type: String,
        default: "",
      },
      likes: {
        type: Number,
        default: 0,
      },
      likedBy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      comments: [
        {
          content: {
            type: String,
            required: true,
          },
          author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          date: {
            type: String,
            required: true,
          },
          updatedDate: {
            type: String,
            default: "",
          },
          likes: {
            type: Number,
            default: 0,
          },
          likedBy: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        },
      ],
    },
  ],
});

// Format date function (updated with option for short format)
function formatDate(date, format = "long") {
  const options = {
    year: format === "short" ? undefined : "numeric",
    month: format === "short" ? "short" : "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

articleSchema.pre("save", function (next) {
  const formattedDate = formatDate(this.date);
  this.date = formattedDate;
  next();
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
