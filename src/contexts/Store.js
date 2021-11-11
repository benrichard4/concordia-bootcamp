import React, { useState, useEffect, useContext } from "react";
import { getAllArticles, getPaginatedArticles } from "../services/contentful";

export const StoreContext = React.createContext();

//Provides context for the whole app on the articles and pages
export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [ArticlePage, setArticlePage] = useState(1); //state for controling article pages

  useEffect(() => {
    (async function fetchArticles() {
      //set limit to article page multiplied by the number we want to see on each page, in this case 6
      const limit = ArticlePage * 6;
      //skip is hard set to 0, so that we continue to see the other articles ontop
      const skip = 0;
      //sets the state "articles". Calls getPaginatedArticals from contentful.js
      setArticles(await getPaginatedArticles(limit, skip));
    })();
  }, [ArticlePage]); //everytime ArticlePage state is changed (by clicking the load more button), run this useeffect.

  //fetches all articles and calls the getFeatured function, passing all of the articles to it.
  useEffect(() => {
    (async function fetchAllArticles() {
      const allArticles = await getAllArticles();
      //run the getFeatured function to set the featured article
      getFeatured(allArticles);
    })();
    //console.log();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  //getFeatured function receives all of the articles, then filters them for 2 things:
  // 1. If the fields.fetured boolean is === true
  // 2. If multiple items exit, it finds the most recent one by comparing the dates
  const getFeatured = (allArticles) => {
    let newDateHolder = null;
    let oldDateHolder = null;
    let featuredArticleArr = [];

    //filter for articles that have featured value of true
    const allFeaturedArticles = allArticles.filter(
      (article) => article.fields.featured
    );

    //cycle through all the articles. Check the dates against one another. Get the most recent article
    allFeaturedArticles.forEach((article) => {
      if (!oldDateHolder) {
        oldDateHolder = new Date(article.fields.date);
        featuredArticleArr.push(article);
      } else {
        newDateHolder = new Date(article.fields.date);
        if (newDateHolder.getTime() > oldDateHolder.getTime()) {
          featuredArticleArr[0] = article;
        }
        oldDateHolder = new Date(article.fields.date);
      }
    });

    const newfeatured = featuredArticleArr[0];
    //set the featured article state
    setFeaturedArticle(newfeatured);
  };

  return (
    <StoreContext.Provider
      value={{
        featuredArticle,
        setFeaturedArticle,
        getFeatured,
        setArticlePage,
        ArticlePage,
        articles,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
