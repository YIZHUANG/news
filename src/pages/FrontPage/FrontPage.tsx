
import React, { useState, useEffect } from "react";
import { NextAppContext } from "next/app";

import Header from "@components/Header";
import Categories from "@components/Categories";
import ChannelList from "@components/Channels/ChannelList";
import SplashScreen from "@components/SplashScreen";
import categoriesApi from "@api/categoriesApi";
import { Category } from "../../types/categories";

interface Props {
  categoriesData: Category[];
}

const CATEGORIES_STATE = "CATEGORIES_STATE";

const DataPersistor = ({ categoriesData }: Props) => {
  // this will pass the data from server to client side.
  const script = `window.${CATEGORIES_STATE}=${JSON.stringify(categoriesData)}`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

const FrontPage = ({ categoriesData }: Props) => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesData[0].title
  );
  const selectedCategoryData: Category | undefined = categoriesData.find(
    category => category.title === selectedCategory
  );
  return (
    <>
      <Header />
      <Categories
        onClick={setSelectedCategory}
        selectedCategory={selectedCategory}
        categories={categoriesData}
      />
      <ChannelList
        items={selectedCategoryData && selectedCategoryData.channels}
      />
      <DataPersistor categoriesData={categoriesData} />
    </>
  );
};

FrontPage.getInitialProps = async ({ req }: NextAppContext["ctx"]) => {
  let categoriesData = null;
  if (req || !window[CATEGORIES_STATE]) {
    categoriesData = await categoriesApi.getAllCategories();
  } else {
    categoriesData = window[CATEGORIES_STATE];
  }
  return {
    categoriesData,
  };
};

export default FrontPage;
