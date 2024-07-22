import React from "react";
import style from "../styles/newsCard.module.scss";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function NewsCard({ id, title, description, author, date, imageUrl }) {
  function formatDateTime(isoString) {
    const date = new Date(isoString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleString(undefined, options);
  }

  return (
    <Link href={`newsDetail/${id}`} className={style.card_container}>
      <div className={style.card_image_container}>
        <img className={style.card_image} src={imageUrl} alt={title} />
      </div>
      <div className={style.card_content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={style.meta_data}>
          <span className={style.credit}>
            <strong>Author: </strong>
            {author}
          </span>
          <span className={style.credit}>
            <strong>{formatDateTime(date)}</strong>
          </span>
        </div>
      </div>
    </Link>
  );
}
