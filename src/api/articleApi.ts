/*
Faking the article data for infinite scrolling as well as getting single article by id.
*/

import uuidv1 from "uuid/v1";
//@ts-ignore
import faker from "faker";

import { Article } from "../types/articles";

let fakeArticles: { [key: string]: any } = {};

const defaultImage =
  "https://avatars0.githubusercontent.com/u/28932103?s=460&v=4"

const content = () => {
  // for markdown, the body of the article;
  const p1 = faker.lorem.sentences(3, 3);
  const p2 = faker.hacker.phrase();
  const p3 = faker.lorem.paragraphs();
  const p4 = faker.lorem.paragraphs();
  const p5 = faker.lorem.paragraphs();
  return `<p>${p1}</p><br /><h6>${p2}</h6><br /><p>${p3}</p><br /><p>${p4}</p><br /><p>${p5}</p>`;
};

function generateFakeArticle(channelName: string, id: string | null = null) {
  return {
    channelName,
    image: defaultImage,
    id: id || uuidv1(),
    title: faker.hacker.phrase(),
    publisher: faker.company.companySuffix(),
    date: "Apr 3, 2015",
    content: content(),
  };
}
function generateFakeArticles(channelName: string) {
  if (!fakeArticles[channelName]) {
    const data = Array(100)
      .fill(0)
      .map(() => {
        return generateFakeArticle(channelName);
      });
    fakeArticles[channelName] = data;
  }
  return fakeArticles;
}

const getArticlesByChannel = async (
  channelName: string,
  cursor: number = 0,
  limit: number = 6
): Promise<{
  data: Article[];
  hasMore: boolean;
}> => {
  const allArticles = generateFakeArticles(channelName);
  const selectedChannelData = allArticles[channelName];
  const data = selectedChannelData.slice(cursor, cursor + limit);
  const hasMore = selectedChannelData.length > cursor + limit;
  return new Promise(res => {
    setTimeout(
      () =>
        res({
          data,
          hasMore,
        }),
      500
    );
  });
};

const getArticleById = async (
  channelName: string,
  id: string
): Promise<Article> => {
  const article = generateFakeArticle(channelName, id);
  return new Promise(res => {
    setTimeout(() => res(article), 500);
  });
};

export default { getArticlesByChannel, getArticleById };
