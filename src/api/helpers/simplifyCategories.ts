import get from "lodash/get";
import { EntryCollection } from "contentful";

import { CategoriesResponse } from "../../types/categories";
import { extractChannels } from "./simplifyChannels";

function simplifyCategories(
  items: EntryCollection<CategoriesResponse>["items"]
) {
  return items
    .map(item => {
      const { id } = item.sys;
      return {
        ...item.fields,
        id,
        channels: get(item, "fields.channels", []).map(extractChannels),
      };
    })
    .sort((a, b) => b.title.localeCompare(a.title));
}

export { simplifyCategories };
