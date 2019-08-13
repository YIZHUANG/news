/*

Todos: srcSet, size, webp support;
*/

import React from "react";
import LazyLoad from "react-lazyload";

interface Props {
  url: string;
  alt: string;
  className?: string;
}
const Placeholder = ({ url, alt, className }: Props) => {
  const imgStyle = {
    width: "100%",
    height: "100%",
    filter: "blur(20px)",
  };
  const lowQualityImageUrl = `${url}?q=1`;
  return (
    <img
      className={className || ""}
      alt={alt}
      src={lowQualityImageUrl}
      style={{ ...imgStyle }}
    />
  );
};

const LazyLoadImage = ({ url, alt, className }: Props) => {
  return (
    <LazyLoad
      placeholder={<Placeholder className={className} url={url} alt={alt} />}
      once
    >
      <img className={className || ""} src={url} alt={alt} />
    </LazyLoad>
  );
};

export default LazyLoadImage;
