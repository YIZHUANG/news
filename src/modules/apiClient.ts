import { createClient } from "contentful";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const contentfulClient = createClient({
  ...publicRuntimeConfig.contentful.siteManagement,
});

export { contentfulClient };
