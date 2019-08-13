import { EntryCollection } from "contentful";

import { contentfulClient } from "@modules/apiClient";
import { ChannelResponse, Channel } from "../types/channels";
import { simplifyChannels } from "./helpers/simplifyChannels";

const getChannelByName = async (
  channelName: string
): Promise<Channel | null> => {
  const res: EntryCollection<
    ChannelResponse
  > = await contentfulClient.getEntries({
    "fields.title": channelName,
    content_type: "channels",
  });
  return simplifyChannels(res.items);
};

export default { getChannelByName };
