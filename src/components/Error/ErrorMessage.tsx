import React from "react";

import "./ErrorMessage.scss";

interface Props {
  message?: string;
}
const ErrorMessage = ({ message }: Props) => {
  return <p className="error-message">{message}</p>;
};
ErrorMessage.defaultProps = {
  message: "An error occur, try again",
};

export default ErrorMessage;
