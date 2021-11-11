import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import Container from "../Container";
import ArticleGrid from "./ArticleGrid";
import FeaturedArticle from "./FeaturedArticle";
import {
  ArticleGridContainer,
  BlogTitle,
  Divider,
  LoadMoreButton,
} from "./styled-components";

//Homepage component renders each item on homepage
function Homepage() {
  return (
    <Container>
      <BlogTitle>Blog</BlogTitle>
      <Divider />
      <FeaturedArticle />
      <Divider />
      <h2>Articles</h2>
      <ArticleGrid />
    </Container>
  );
}

export default Homepage;
