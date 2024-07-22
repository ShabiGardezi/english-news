import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import newsRouter from "./routes/news.routes.js";
import { serverError } from "./errors/error.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/news", newsRouter);

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "English News App Base Route",
    client: process.env.CLIENT_URL,
  });
});

app.use(serverError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
