"use client";
import React, { Component } from "react";
import style from "./content.module.scss";
import Newslist from "./newsList/news";
// import "antd-mobile/dist/antd-mobile.css";

class Content extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      category: [],
    };
  }
  render() {
    return (
      <div className={style.content} id="contentModule">
        <Newslist />
      </div>
    );
  }
}

export default Content;
