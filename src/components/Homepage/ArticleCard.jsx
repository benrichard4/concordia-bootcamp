import React from "react";
import {
  ArticleContainer,
  ArticleImage,
  CategoryLink,
  NavLinkStyle,
  TitleAndCategoryContainer,
  TitleDiv,
} from "./styled-components";

//component detailing the layout of each article card
const ArticleCard = ({ article }) => {
  return (
    <ArticleContainer>
      <ArticleImage
        src="https://via.placeholder.com/400x180"
        alt="Article Image"
      />
      <TitleAndCategoryContainer>
        <TitleDiv>
          {/* Would Link to article...page not built as part of workshop  */}
          <NavLinkStyle to={`/articles/${article.sys.id}`}>
            {article.fields.title}
          </NavLinkStyle>
        </TitleDiv>
        {/* Would Link to category page...page not built as part of workshop  */}
        <CategoryLink to={`/tag/${article.fields.category}`}>
          {article.fields.category}
        </CategoryLink>
      </TitleAndCategoryContainer>
    </ArticleContainer>
  );
};

export default ArticleCard;
