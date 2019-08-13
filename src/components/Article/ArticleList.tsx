import React from "react";

import { Article } from "../../types/articles";
import ArticleCard from "../Cards/ArticleCard";
import "./ArticleList.scss";

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="article-list">
      {articles.map(article => {
        return <ArticleCard key={article.id} {...article} />;
      })}
    </div>
  );
};

export default ArticleList;
