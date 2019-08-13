import React from "react";

import ErrorMessage from "./ErrorMessage";
import Header from "../Header";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Header backLink="/" />
      <div className="not-found">
        <h1>404</h1>
        <ErrorMessage message="The content you are looking for can not be found" />
      </div>
    </>
  );
};

export default NotFound;
