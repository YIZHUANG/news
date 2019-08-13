import React from "react";
import classNames from "classnames";

import "./BackButton.scss";

type Props = {
  onClick?: () => void;
  className?: string;
};

const BackButton = ({ className, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={classNames("back-button", className)}
    >
      <img
        className="back-button__arrow"
        alt="arrow"
        src="../../static/back-arrow.png"
      />
    </button>
  );
};

export default BackButton;
