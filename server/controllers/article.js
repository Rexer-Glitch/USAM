const Articles = require("../models/article");
exports.getArticle = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id)
      .populate("author", "username firstname lastname profileUrl")
      .select("-author.password");

    if (!article) {
      res.status(404).json({ message: "Article not found" });
    } else {
      res.status(200).json(article);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving article", error });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Articles.find()
      .populate("author", "username firstname lastname profileUrl")
      .select("-password")
      .sort({ date: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.postArticle = async (req, res) => {
  try {
    const newArticle = new Articles({
      title: req.body.title,
      content: req.body.content,
      date: Date.now(),
      author: req.userId,
      coverUrl: req.body.coverUrl,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Articles.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      res.status(404).json({ message: "Article not found" });
    } else {
      res
        .status(200)
        .json({ message: "Article deleted", article: deletedArticle });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error });
  }
};

exports.updateArticle = async (req, res) => {
  if (req.userId !== req.body.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const updatedArticle = await Articles.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        coverUrl: req.body.coverUrl,
      },
      { new: true }
    );

    if (!updatedArticle) {
      res.status(404).json({ message: "Article not found" });
    } else {
      res.status(200).json(updatedArticle);
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};
