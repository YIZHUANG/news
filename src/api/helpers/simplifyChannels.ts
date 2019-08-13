import get from "lodash/get";
import { EntryCollection } from "contentful";

import { Entry } from "../../types/share";
import { ChannelResponse } from "../../types/channels";
import simplifyImage from "./simplifyImage";

function extractChannels(item: Entry) {
  if (!item) {
    return null;
  }
  const id = get(item, "sys.id", null);
  const cover = get(item, "fields.cover", null);
  const title = get(item, "fields.title", null);
  const followers = get(item, "fields.followers", 0);
  return {
    cover: simplifyImage(cover),
    id,
    title,
    followers,
  };
}

function simplifyChannels(items: EntryCollection<ChannelResponse>["items"]) {
  return extractChannels(get(items, ["0"], null));
}

export { extractChannels, simplifyChannels };
