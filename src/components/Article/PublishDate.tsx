import React from "react";

import './PublishDate.scss';

const PublishDate = ({ date }: { date: string }) => {
  return (
    <div className='publish-date'>
      <img className='time' alt="time" src={require("../../static/time.png")} />
      <span>{date}</span>
    </div>
  );
};


export default PublishDate;
