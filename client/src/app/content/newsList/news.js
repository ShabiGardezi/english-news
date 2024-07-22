import React, { useState, useEffect } from "react";
import CategoryHeader from "./components/CategoryHeader";
import NewsCard from "./components/NewsCard";
import { getAllNewsApiCall } from "./api/news.api";
import Link from "next/link";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("News");

  const fetchNews = async () => {
    if (loading) return;

    setLoading(true);
    const result = await getAllNewsApiCall(skip, limit, category);
    console.log(result.news);
    if (result.success) {
      setNews(result.news);
      setSkip(skip + limit);
      setHasMore(result.news.length === limit);
    } else {
      console.error(result.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    setNews([]);
    setHasMore(true);
    fetchNews();
  }, [category]);

  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    fetchNews();
  };

  if (news.length === 0) {
    <h1>No Data to Show</h1>;
  }

  return (
    <div style={{ paddingTop: "66px" }}>
      <CategoryHeader category={category} setCategory={setCategory} setSkip={setSkip} />
      {news.length === 0 ? (
        <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>No Data to Show</h1>
      ) : (
        <div style={{ padding: "4px", marginTop: "4px", width: "100%", display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} id={newsItem.id} title={newsItem.title} description={newsItem.description} author={newsItem.author.name} date={newsItem.date} imageUrl={newsItem.coverImage} />
          ))}
        </div>
      )}
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "20px", fontSize: "10px" }}>
          <span onClick={handleLoadMore} style={{ cursor: "pointer" }}>
            Load More
          </span>
        </div>
      )}
    </div>
  );
};

export default NewsList;
