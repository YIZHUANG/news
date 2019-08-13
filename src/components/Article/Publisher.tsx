import React from "react";

import "./Publisher.scss";

const Publisher = ({ publisher }: { publisher: string }) => {
  return (
    <div className='publisher'>
      <img
        className="source"
        alt="source"
        src={require("../../static/source.png")}
      />
      <span>{publisher}</span>
    </div>
  );
};

export default Publisher;
