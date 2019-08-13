import LazyLoadImage from "@components/Images/LazyLoadImage";
import Button from "@components/Buttons/Button";

import "./ChannelBanner.scss";

interface Props {
  title: string;
  followers: number;
  isFollowed: boolean;
  url: string;
  alt: string;
}

const ChannelBanner = ({ title, followers, isFollowed, url, alt }: Props) => {
  return (
    <div className="channel-banner">
      <LazyLoadImage className="channel-banner__image" url={url} alt={alt} />
      <div className="channel-banner__content">
        <h1 className="channel-banner__title">{title} Channel</h1>
        <Button
          className="channel-banner__follow-btn"
          type={isFollowed ? "filled" : "transparent"}
          onClick={() => {}}
          text={isFollowed ? "Following" : "Follow"}
        />
        <span className="channel-banner__followers">{followers} Followers</span>
      </div>
    </div>
  );
};

export default ChannelBanner;
