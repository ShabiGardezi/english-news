"use client"
import React, { useEffect, useState } from "react";
import { getNewsDetailApiCall } from "./api/newDetail.api";

const NewsDetail = ({ newsId }) => {
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsDetail = async () => {
      const result = await getNewsDetailApiCall(newsId);

      if (result.success) {
        setNewsDetail(result.news);
        setLoading(false);
      } else {
        setError(result.message);
        setLoading(false);
      }
    };

    getNewsDetail();
  }, [newsId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!newsDetail) return <div>No Data Found</div>;

  const { title, News, date, category, author } = newsDetail;

  return (
    <div style={{ padding: "20px", width: "100%", margin: "0 auto" }}>
      {/* Article Title */}
      <h1 style={{ fontSize: "0.4rem", color: "black" }}>{title}</h1>

      {/* Article Metadata */}
      <div style={{ marginBottom: "20px", color: "gray", fontSize: "0.1rem" }}>
        <p>
          <strong>Author:</strong> {author.name}
        </p>
        <p>
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>

      {/* Article Content */}
      <div>
        {News.map((item) => {
          if (item.type === "paragraph") {
            return (
              <p style={{ marginBottom: "20px", fontSize: "0.15rem" }} key={item._id}>
                {item.content}
              </p>
            );
          } else if (item.type === "image") {
            return <img key={item._id} src={item.content} alt="image" style={{ width: "80%", height: "auto", margin: "0 auto"}} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NewsDetail;
