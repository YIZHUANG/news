import { EntryCollection } from "contentful";

import { contentfulClient } from "@modules/apiClient";
import { CategoriesResponse, Category } from "../types/categories";
import { simplifyCategories } from "./helpers/simplifyCategories";

const getAllCategories = async (): Promise<Category[]> => {
  const res: EntryCollection<
    CategoriesResponse
  > = await contentfulClient.getEntries({
    content_type: "categories",
  });
  return simplifyCategories(res.items);
};

export default { getAllCategories };
