import React from "react";
import Capitalize from "lodash/capitalize";

import PublishInfo from "../Article/PublishInfo";
import { Article } from "../../types/articles";
import { Link } from "@root/routes";
import "./ArticleCard.scss";

interface Props extends Article {
  channelName: string;
}
const ArticleCard = ({ title, date, publisher, id, channelName }: Props) => {
  return (
    <Link route={`/${channelName}/${title}/${id}`} prefetch>
      <a className="article-card">
        <article className="article-card__content">
          <h5 className="article-card__title">{Capitalize(title)}</h5>
          <PublishInfo publisher={publisher} date={date} />
        </article>
      </a>
    </Link>
  );
};

export default ArticleCard;
