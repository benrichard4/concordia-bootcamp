import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Homepage styles:
export const Divider = styled.hr`
  border: 2px solid black;
`;

export const BlogTitle = styled.h1`
  margin: 40px 0;
`;

//ArticleGrid styles:
export const ArticleCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  /* max-width: 840px; */
`;

export const ArticleGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 840px;
`;

export const LoadMoreButton = styled.button`
  margin: 30px 0;
  border: none;
  background-color: black;
  //height: 30px;
  color: white;
  padding: 10px 20px;
  outline: 2px solid black;
  border-radius: 25px;

  &:hover {
    background-color: transparent;
    color: black;
    cursor: pointer;
  }
`;

//ArticleCard styles:
export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 5px;
  flex: 1 1 50%;
  min-width: 180px;
  max-width: 400px;
  box-shadow: 0 0 40px lightgray;
  color: black;
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
  }
`;

export const TitleAndCategoryContainer = styled.div`
  min-height: 190px;
  position: relative;
  padding: 20px;
`;

export const TitleDiv = styled.div`
  font-size: 25px;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

export const CategoryLink = styled(NavLink)`
  margin: 20px 0;
  position: absolute;
  bottom: 0;
`;

export const ArticleImage = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
`;

export const NavLinkStyle = styled(NavLink)`
  font-weight: bold;
`;

//FeaturedArticle styles
export const FeaturedArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin: 40px 20px;
  max-width: 100%;
  min-width: 200px;
`;

export const FeaturedArticleImage = styled.img`
  max-width: 100%;
  min-width: 180px;
  flex: 1 1 400px;
`;

export const FeatureTitleAndCategoryContainer = styled.div`
  flex: 1 1 400px;
  max-width: 100%;
  min-height: 250px;
  padding: 20px;
`;

export const InfoDiv = styled.div`
  margin: 20px 0;
`;

export const NavLinkFeatured = styled(NavLinkStyle)``;
