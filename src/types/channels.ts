import { Asset } from "./share";
export interface Channel {
  title: string;
  id: string;
  followers: number;
  cover: {
    url: string;
    alt: string;
  }; // image url;
}
export interface ChannelResponse {
  title: string;
  followers: number;
  cover: {
    title: string;
    cover: Asset;
  };
}
