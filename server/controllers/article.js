import Articles from "../models/article.js";

function formatDate(date, format = "long") {
  const options = {
    year: format === "short" ? undefined : "numeric",
    month: format === "short" ? "short" : "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const getArticle = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id)
      .populate("author", "username firstname lastname profileUrl")
      .populate({
        path: "comments.author",
        select: "username firstname lastname profileUrl",
      })
      .populate({
        path: "comments.$[elem].comments.author", // Correct path for nested comment author
        select: "username firstname lastname profileUrl",
        new: true,
      })
      .populate("likedBy", "username firstname lastname profileUrl")
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

export const getArticles = async (req, res) => {
  try {
    const articles = await Articles.find()
      .populate("author", "username firstname lastname profileUrl")
      .populate({
        path: "comments.author",
        select: "username firstname lastname profileUrl",
      })
      .populate({
        path: "comments.comments.author",
        select: "username firstname lastname profileUrl",
        new: true,
      })
      .select("-password")
      .sort({ date: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log(error);
  }
};

export const postArticle = async (req, res) => {
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

export const deleteArticle = async (req, res) => {
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

export const updateArticle = async (req, res) => {
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

export const isLiked = async (req, res) => {
  const article = await Articles.findById(req.params.id);
  if (!article) return false;
  return article.likedBy.includes(req.userId);
};

export const likeArticle = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const liked = await isLiked(req, res);

    if (liked) {
      // Dislike the article
      const updatedArticle = await Articles.findByIdAndUpdate(
        req.params.id,
        {
          $inc: { likes: -1 }, // Decrement likes
          $pull: { likedBy: req.userId }, // Remove user from likedBy array
        },
        { new: true }
      );

      res.status(200).json(updatedArticle);
    } else {
      // Like the article
      const updatedArticle = await Articles.findByIdAndUpdate(
        req.params.id,
        {
          $inc: { likes: 1 },
          $push: { likedBy: req.userId },
        },
        { new: true }
      );

      res.status(200).json(updatedArticle);
    }
  } catch (error) {
    res.status(500).json({ message: "Error liking article", error });
  }
};

export const likeComment = async (req, res) => {
  try {
    const { articleId, commentId } = req.params;

    const article = await Articles.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const commentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const isLiked = article.comments[commentIndex].likedBy.includes(req.userId);

    if (isLiked) {
      // Unlike the comment
      const updatedArticle = await Articles.findByIdAndUpdate(
        articleId,
        {
          $inc: { "comments.$.likes": -1 },
          $pull: { "comments.$.likedBy": req.userId },
        },
        {
          arrayFilters: [{ "elem._id": commentId }],
          new: true,
        }
      );
    } else {
      // Like the comment
      const updatedArticle = await Articles.findByIdAndUpdate(
        articleId,
        {
          $inc: { "comments.$.likes": 1 },
          $push: { "comments.$.likedBy": req.userId },
        },
        {
          arrayFilters: [{ "elem._id": commentId }],
          new: true,
        }
      );
    }

    await updatedArticle.populate({
      path: "comments.author",
      select: "username firstname lastname profileUrl",
    });

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error liking comment", error });
  }
};

export const addComment = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }

    const newComment = {
      content: req.body.content,
      author: req.userId,
      date: formatDate(Date.now()),
    };

    const updatedArticle = await Articles.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: newComment } },
      { new: true }
    );

    res.status(201).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

export const updateComment = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }

    const commentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );

    if (commentIndex === -1) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    const updatedComment = {
      ...article.comments[commentIndex],
      content: req.body.content,
    };

    const updatedArticle = await Articles.findByIdAndUpdate(
      req.params.id,
      { $set: { "comments.$[elem]": updatedComment } },
      { arrayFilters: [{ "elem._id": req.params.commentId }], new: true }
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating comment", error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }

    const commentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );

    if (commentIndex === -1) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    const updatedArticle = await Articles.findByIdAndUpdate(
      req.params.id,
      { $pull: { comments: { _id: req.params.commentId } } },
      { new: true }
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

export const addCommentToComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;

    const article = await Articles.findById(id);
    console.log(article);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const parentCommentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (parentCommentIndex === -1) {
      return res.status(404).json({ message: "Parent comment not found" });
    }

    const newComment = {
      content: req.body.content,
      author: req.userId,
      date: formatDate(Date.now()),
    };

    const updatedArticle = await Articles.findByIdAndUpdate(
      id,
      {
        $push: {
          "comments.$[elem].comments": newComment, // Push to nested comments array
        },
      },
      {
        arrayFilters: [{ "elem._id": commentId }],
        new: true,
      }
    );

    await updatedArticle.populate({
      path: "comments.author",
      select: "username firstname lastname profileUrl",
      new: true,
    });

    await updatedArticle.populate({
      path: "comments.$[elem].comments.author", // Correct path for nested comment author
      select: "username firstname lastname profileUrl",
      new: true,
    });

    res.status(201).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

export const updateCommentToComment = async (req, res) => {
  try {
    const { articleId, commentId, nestedCommentId } = req.params;

    const article = await Articles.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const parentCommentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (parentCommentIndex === -1) {
      return res.status(404).json({ message: "Parent comment not found" });
    }

    const nestedCommentIndex = article.comments[
      parentCommentIndex
    ].comments.findIndex(
      (comment) => comment._id.toString() === nestedCommentId
    );

    if (nestedCommentIndex === -1) {
      return res.status(404).json({ message: "Nested comment not found" });
    }

    const updatedNestedComment = {
      ...article.comments[parentCommentIndex].comments[nestedCommentIndex],
      content: req.body.content,
      updatedDate: formatDate(Date.now()),
    };

    const updatedArticle = await Articles.findByIdAndUpdate(
      articleId,
      {
        $set: {
          "comments.$[elem].comments.$[nestedElem]": updatedNestedComment,
        },
      },
      {
        arrayFilters: [
          { "elem._id": commentId },
          { "nestedElem._id": nestedCommentId },
        ],
        new: true,
      }
    );

    await updatedArticle.populate({
      path: "comments.author",
      select: "username firstname lastname profileUrl",
    });
    await updatedArticle.populate(
      "comments.comments.author",
      "username firstname lastname profileUrl"
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating nested comment", error });
  }
};

export const deleteCommentToComment = async (req, res) => {
  try {
    const { articleId, commentId, nestedCommentId } = req.params;

    const article = await Articles.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Note: No need to check for parent comment existence, as $pull will handle it if not found

    const updatedArticle = await Articles.findByIdAndUpdate(
      articleId,
      {
        $pull: {
          "comments.$[elem].comments": { _id: nestedCommentId },
        },
      },
      {
        arrayFilters: [{ "elem._id": commentId }],
        new: true,
      }
    );

    await updatedArticle.populate({
      path: "comments.author",
      select: "username firstname lastname profileUrl",
    });
    await updatedArticle.populate(
      "comments.comments.author",
      "username firstname lastname profileUrl"
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error deleting nested comment", error });
  }
};

export const likeCommentToComment = async (req, res) => {
  try {
    const { articleId, commentId, nestedCommentId } = req.params;

    const article = await Articles.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const parentCommentIndex = article.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (parentCommentIndex === -1) {
      return res.status(404).json({ message: "Parent comment not found" });
    }

    const nestedCommentIndex = article.comments[
      parentCommentIndex
    ].comments.findIndex(
      (comment) => comment._id.toString() === nestedCommentId
    );

    if (nestedCommentIndex === -1) {
      return res.status(404).json({ message: "Nested comment not found" });
    }

    const isLiked = article.comments[parentCommentIndex].comments[
      nestedCommentIndex
    ].likedBy.includes(req.userId);

    if (isLiked) {
      // Unlike the nested comment
      const updatedArticle = await Articles.findByIdAndUpdate(
        articleId,
        {
          $inc: {
            "comments.$[elem].comments.$[nestedElem].likes": -1,
          },
          $pull: {
            "comments.$[elem].comments.$[nestedElem].likedBy": req.userId,
          },
        },
        {
          arrayFilters: [
            { "elem._id": commentId },
            { "nestedElem._id": nestedCommentId },
          ],
          new: true,
        }
      );
    } else {
      // Like the nested comment
      const updatedArticle = await Articles.findByIdAndUpdate(
        articleId,
        {
          $inc: {
            "comments.$[elem].comments.$[nestedElem].likes": 1,
          },
          $push: {
            "comments.$[elem].comments.$[nestedElem].likedBy": req.userId,
          },
        },
        {
          arrayFilters: [
            { "elem._id": commentId },
            { "nestedElem._id": nestedCommentId },
          ],
          new: true,
        }
      );
    }

    await updatedArticle.populate({
      path: "comments.author",
      select: "username firstname lastname profileUrl",
    });
    await updatedArticle.populate(
      "comments.comments.author",
      "username firstname lastname profileUrl"
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error liking nested comment", error });
  }
};
