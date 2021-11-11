import React, { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import {
  FeaturedArticleContainer,
  FeaturedArticleImage,
  FeatureTitleAndCategoryContainer,
  InfoDiv,
  NavLinkFeatured,
  TitleDiv,
} from "./styled-components";

//component for featured article section
const FeaturedArticle = () => {
  const { featuredArticle } = useContext(StoreContext);

  return (
    //don't render until featured article has a value
    featuredArticle && (
      <FeaturedArticleContainer>
        <FeaturedArticleImage
          src="https://via.placeholder.com/475x300"
          alt="Article Image"
        />
        <FeatureTitleAndCategoryContainer>
          <TitleDiv>
            {/* When title is clicked, it would bring the user to the featured article page which is not built as part of this workshop*/}
            <NavLinkFeatured to={`/articles/${featuredArticle.sys.id}`}>
              {featuredArticle.fields.title}
            </NavLinkFeatured>
          </TitleDiv>
          <InfoDiv>{featuredArticle.fields.content}</InfoDiv>
          {/* When title is clicked, it would bring the user to the featured article page which is not built as part of this workshop*/}
          <NavLinkFeatured to={`/articles/${featuredArticle.sys.id}`}>
            Read More
          </NavLinkFeatured>
        </FeatureTitleAndCategoryContainer>
      </FeaturedArticleContainer>
    )
  );
};

export default FeaturedArticle;
