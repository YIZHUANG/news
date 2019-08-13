import ErrorMessage from "@components/Error/ErrorMessage";
import Thumbnail from "@components/Images/Thumbnail";
import { Link } from "@root/routes";
import { Channel } from "../../types/channels";

import "./ChannelList.scss";

const ChannelList = ({ items }: { items?: Channel[] }) => {
  if (!Array.isArray(items) || !items.length) {
    return <ErrorMessage message="There's no channels linked to this category" />;
  }
  return (
    <div className="channel-items">
      {items.map(item => {
        return (
          <Link passHref prefetch key={item.id} route={`/${item.title}`}>
            <a className="channel-item">
              <Thumbnail
                text={item.title}
                url={item.cover.url}
                alt={item.cover.alt}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ChannelList;
