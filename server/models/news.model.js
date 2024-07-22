import mongoose from "mongoose";

const newsContentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["heading", "image", "paragraph"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  News: {
    type: [newsContentSchema],
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  coverImage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "News",
      "Opinion",
      "Legal",
      "Health",
      "Faith",
      "Women",
      "Youth",
      "Life",
      "Culture",
    ],
    default: "News",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const News = mongoose.model("News", newsSchema);

export default News;
