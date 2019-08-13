import React from "react";
import classNames from "classnames";

import LazyLoadImage from "./LazyLoadImage";
import "./Thumbnail.scss";

interface Props {
  url: string;
  alt: string;
  text: string;
  className?: string;
}

const Thumbnail = ({ url, alt, text, className }: Props) => {
  return (
    <div className={classNames("thumbnail", className)}>
      <LazyLoadImage className="thumbnail__image" url={url} alt={alt} />
      <div className="thumbnail__text">{text}</div>
    </div>
  );
};

export default Thumbnail;
