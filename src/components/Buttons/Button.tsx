import React from "react";
import classNames from "classnames";

import "./Button.scss";

type Props = {
  text: string;
  onClick: any; // can be any;
  className?: string;
  type: "transparent" | "filled";
};

const classes = {
  transparent: "button--transparent",
  filled: "button--filled",
};

const Button = ({ text, className, type, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className={classNames("button", classes[type], className)}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "transparent",
};

export default Button;
