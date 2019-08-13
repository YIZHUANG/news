import { Channel } from "./channels";
import { AssetSys, Entry } from "./share";

export interface Category {
  title: string;
  id: string;
  channels: Channel[];
}
export interface CategoriesResponse {
  title: string;
  channels: Entry[];
}

export interface Item {
  sys: AssetSys;
  fields: ItemFields;
}

export interface ItemFields {
  title: string;
  channels: Entry[];
}
