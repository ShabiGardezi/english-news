import express from "express";
import { getNews, getNewsById } from "../controllers/news.controllers.js";

const router = express.Router();

router.get("/get/all", getNews);
router.get("/get/:newsId", getNewsById);

export default router;
