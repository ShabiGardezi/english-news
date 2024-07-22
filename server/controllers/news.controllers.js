import mongoose from "mongoose";
import News from "../models/news.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../errors/error.js";

export const getNews = async (req, res, next) => {
  try {
    const skip = parseInt(req.query.skip) || 0; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 2; // Default to 2 items per page
    const category = req.query.cat || "News";

    // Fetch news articles with the author details, sorted by date descending
    const news = await News.find({ category: category })
      .populate("author", "name _id")
      .sort({ date: -1 })
      .skip(skip) // Skip documents based on the current page
      .limit(limit) // Limit the number of documents returned
      .exec();

    // Format news data
    const formattedNews = news.map((article) => {
      const firstParagraph = article.News.find(
        (content) => content.type === "paragraph"
      );
      const description = firstParagraph
        ? firstParagraph.content.substring(0, 200)
        : "";

      return {
        id: article._id,
        title: article.title,
        description: description,
        date: article.date,
        coverImage: article.coverImage || "",
        author: {
          name: article.author.name,
          id: article.author._id,
        },
      };
    });

    res.status(200).send({ success: true, news: formattedNews, n: news });
  } catch (error) {
    next(error);
  }
};

export const getNewsById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.newsId)) {
      return next(errorHandler(400, "Invalid Url"));
    }
    const news = await News.findById(req.params.newsId).populate(
      "author",
      "name _id"
    );
    if (news == null) {
      return next(errorHandler(400, "Invalid Url"));
    }
    res.status(200).send({ success: true, news });
  } catch (error) {
    next(error);
  }
};
