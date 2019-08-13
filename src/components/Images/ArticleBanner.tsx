import React from "react";
import classNames from "classnames";

import LazyLoadImage from "./LazyLoadImage";
import "./ArticleBanner.scss";

interface Props {
  url: string;
  alt: string;
  text: string;
  className?: string;
}

const ArticleBanner = ({ url, alt, text, className }: Props) => {
  return (
    <div className={classNames("article-banner", className)}>
      <LazyLoadImage className='article-banner__image' url={url} alt={alt} />
      <div className="article-banner__text">{text}</div>
    </div>
  );
};

export default ArticleBanner;
