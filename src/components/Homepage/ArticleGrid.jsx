import React, { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import ArticleCard from "./ArticleCard";
import {
  ArticleCardContainer,
  ArticleGridContainer,
  LoadMoreButton,
} from "./styled-components";

//component for displaying article grid
const ArticleGrid = () => {
  //get articles from storeContext
  const { articles, setArticlePage, ArticlePage } = useContext(StoreContext);

  //Function increases the article page state by 1 when the load more button is clicked
  const handleOnClick = () => {
    setArticlePage(ArticlePage + 1);
  };

  //map through articles and for each article, display them (contents of card in ArticleCard component)
  return (
    <ArticleGridContainer>
      <ArticleCardContainer>
        {articles.map((article) => {
          return <ArticleCard key={article.sys.id} article={article} />;
        })}
      </ArticleCardContainer>
      {/* button that loads another page of cards. When clicked, the handleOnClick function runs */}
      <LoadMoreButton onClick={handleOnClick}>Load More</LoadMoreButton>
    </ArticleGridContainer>
  );
};

export default ArticleGrid;
