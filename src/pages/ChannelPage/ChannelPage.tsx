import React, { useState } from "react";
import { NextAppContext } from "next/app";
import InfiniteScroll from "react-infinite-scroller";

import Header from "@components/Header";
import channelApi from "@api/channelApi";
import articleApi from "@api/articleApi";
import ChannelBanner from "@root/components/Images/ChannelBanner";
import ArticleList from "@components/Article/ArticleList";
import Loader from "@components/Loader";
import NotFound from "@components/Error/NotFound";
import { Article } from "../../types/articles";
import { Channel } from "../../types/channels";

const limit = 6;

interface Props {
  channelData: Channel;
  articles: Article[];
  channel: string;
  initialHasMore: boolean;
}

const ChannelPage = ({
  channelData,
  channel,
  initialHasMore,
  articles,
}: Props) => {
  const [articlesData, setArticlesData] = useState(articles);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [cursor, setCursor] = useState(0);
  if (!channelData || !articles) {
    return <NotFound />;
  }
  const {
    title,
    followers,
    cover: { url, alt },
  } = channelData;
  async function onLoadMore() {
    if (!loading) {
      setLoading(true);
      const { data, hasMore } = await articleApi.getArticlesByChannel(
        channel,
        cursor,
        limit
      );
      setHasMore(hasMore);
      setArticlesData([...articlesData, ...data]);
      setCursor(cursor + limit);
      setLoading(false);
    }
  }
  return (
    <>
      <Header backLink="/" />
      <ChannelBanner
        title={title}
        followers={followers}
        isFollowed
        url={url}
        alt={alt}
      />
      <InfiniteScroll
        loadMore={() => {
          onLoadMore();
        }}
        initialLoad={false}
        hasMore={hasMore}
        loader={<Loader key={0} />}
      >
        <ArticleList articles={articlesData} />
      </InfiniteScroll>
    </>
  );
};

ChannelPage.getInitialProps = async ({ query }: NextAppContext["ctx"]) => {
  const { channel } = query;

  let channelData = null;
  let articles = null;
  let initialHasMore = false;
  if (channel) {
    channelData = await channelApi.getChannelByName(channel);
    const res = await articleApi.getArticlesByChannel(channel);
    articles = res.data;
    initialHasMore = res.hasMore;
  }
  return {
    channel,
    articles,
    channelData,
    initialHasMore,
  };
};

export default ChannelPage;
