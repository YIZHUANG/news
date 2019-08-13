export interface Asset {
  sys: AssetSys;
  fields: AssetFields;
}

export interface AssetFields {
  title: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: ContentTypeEnum;
}

export enum ContentTypeEnum {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}
export interface Entry {
  sys: AssetSys;
  fields: EntryFields;
}
export interface EntryFields {
  title: string;
  cover: Asset;
}
export interface AssetSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: string;
  updatedAt: string;
  environment: ContentType;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: ID;
  type: PurpleType;
  linkType: LinkType;
}

export enum ID {
  Categories = "categories",
  Channels = "channels",
  Gqp4Q3Fem8Pu = "gqp4q3fem8pu",
  Master = "master",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface CategoriesSys {
  type: string;
}
