import React from "react";
import { NextAppContext } from "next/app";

import Header from "@components/Header";
import articleApi from "@api/articleApi";
import ArticleBanner from "@components/Images/ArticleBanner";
import ArticleBlock from "@components/Article/ArticleBlock";
import NotFound from "@components/Error/NotFound";
import { Article } from "../../types/articles";

interface Props {
  channel: string;
  article: Article;
}

const ArticlePage = ({ article, channel }: Props) => {
  if (!article) {
    return <NotFound />;
  }
  const { image, title } = article;
  return (
    <>
      <Header backLink={`/${channel}`} />
      <ArticleBanner text={title} url={image} alt={title} />
      <ArticleBlock article={article} />
    </>
  );
};

ArticlePage.getInitialProps = async ({ query }: NextAppContext["ctx"]) => {
  const { channel, id } = query;
  const article = await articleApi.getArticleById(
    channel,
    id
  );
  return {
    channel,
    article,
  };
};

export default ArticlePage;
