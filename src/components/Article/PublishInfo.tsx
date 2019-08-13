import React from "react";

import Publisher from "./Publisher";
import PublishDate from "./PublishDate";
import "./PublishInfo.scss";

const PublishInfo = ({
  publisher,
  date,
}: {
  publisher: string;
  date: string;
}) => {
  return (
    <div className="publish-info">
      <Publisher publisher={publisher} />
      <PublishDate date={date} />
    </div>
  );
};

export default PublishInfo;
