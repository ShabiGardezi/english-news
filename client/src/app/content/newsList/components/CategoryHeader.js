import React from "react";
import style from "../styles/categoryHeader.module.scss";

export default function CategoryHeader({ category, setCategory, setSkip }) {
  const handleChange = (val) => () => {
    if (category !== val) {
      setSkip(0);
      setCategory(val);
    }
  };

  return (
    <div className={style.categoryContainer}>
      {["News", "Opinion", "Legal", "Health", "Faith", "Women", "Youth", "Life", "Culture"].map((cat) => (
        <div key={cat} onClick={handleChange(cat)} className={`${style.categoryItem} ${category === cat ? style.active : ""}`}>
          {cat}
        </div>
      ))}
    </div>
  );
}
