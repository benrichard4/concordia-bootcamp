import Container from "../Container";
import ArticleGrid from "./ArticleGrid";
import FeaturedArticle from "./FeaturedArticle";
import { BlogTitle, Divider } from "./styled-components";

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
