import React from "react";

import { Link } from "@root/routes";
import "./ChannelTag.scss";

const ChannelTag = ({ tag }: { tag: string }) => {
  return (
    <Link route={`/${tag}`}>
      <a className="channel-tag">{tag}</a>
    </Link>
  );
};

export default ChannelTag;
