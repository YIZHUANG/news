import get from "lodash/get";

import { Entry } from "contentful";

function simplifyImage(item: Entry<any>) {
  return {
    url: get(item, "fields.file.url", null),
    alt: get(item, "fields.title", null),
  };
}

export default simplifyImage;
