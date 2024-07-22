import Header from "@/app/header/header";
import React from "react";
import NewsDetail from "../NewsDetail";
import Footer from "@/app/footer/footer";

export default function page({ params }) {
  const { newsId } = params;
  return (
    <div style={{ marginTop: "65px" }}>
      <Header />
      <NewsDetail newsId={newsId} />
      <Footer />
    </div>
  );
}
