import React from "react";
import Markdown from "markdown-to-jsx";

import PublishInfo from "./PublishInfo";
import ChannelTag from "./ChannelTag";
import { Article } from "../../types/articles";
import "./ArticleBlock.scss";

const ArticleBlock = ({ article }: { article: Article }) => {
  const { publisher, date, content, channelName } = article;
  return (
    <article className="article-block">
      <div className="article-block__article-spec">
        <PublishInfo publisher={publisher} date={date} />
        <ChannelTag tag={channelName} />
      </div>
      <Markdown>{content}</Markdown>
    </article>
  );
};

export default ArticleBlock;
