import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalPadding, screens } from "../../../helper/styles_variables";

export const Heading = styled.h1`
  text-align: center;
  font-size: 48px;

  max-width: 600px;
  & span {
    font-size: 96px;
  }

  @media (min-width: ${screens.tablet}) {
    font-size: 64px;
    max-width: 800px;

    & span {
      font-size: 128px;
    }
  }
`;

export const Para = styled.p`
  text-align: center;
  font-size: 24px;
  max-width: 650px;

  margin: 50px 0;

  @media (min-width: ${screens.tablet}) {
    font-size: 32px;
    max-width: 850px;
  }
`;

export const ReadMoreBtn = styled(Link)`
  border: 3px solid #515151;
  border-radius: 10px;

  padding: 15px 20px;

  background: transparent;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  text-decoration: none;
  color: #515151;

  width: 100%;

  display: inline-block;

  cursor: pointer;

  @media (min-width: ${screens.desktop}) {
    margin: 10px 0 0;

    width: auto;
  }
`;

export const ArticleText = styled.p`
  text-align: left;

  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  color: #515151;

  margin: 20px 0;
`;

export const ArticleTitle = styled.h2`
  text-align: left;

  font-weight: 600;
  font-size: 40px;
  line-height: 51px;

  color: #424242;
`;

export const UserDate = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  color: #363636;
`;

export const UserProfile = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  display: inline-block;

  background-color: grey;

  margin-right: 10px;

  position: relative;

  &::after {
    content: "";
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    background: #5e5e5e;
  }
`;

export const UserDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0;

  @media (min-width: ${screens.desktop}) {
    justify-content: flex-start;
  }
`;

export const ArticleContent = styled.div`
  @media (min-width: ${screens.desktop}) {
    flex: 1;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  min-width: 350px;
  min-height: 480px;

  background: grey;
  border-radius: 20px 20px 0px 0px;

  display: inline-block;

  position: relative;

  &::after {
    content: "";
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    background: #5e5e5e;
  }

  @media (min-width: ${screens.desktop}) {
    flex: 1;
  }
`;

export const ArticleContainer = styled.article`
  min-width: 350px;

  margin: 20px 0;

  @media (min-width: ${screens.desktop}) {
    max-width: unset;
    ${(props) =>
      props.isHorizontal === true &&
      `
        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 20px;
    `}
  }
`;

export const SideArticlesContainer = styled.div`
  @media (min-width: ${screens.desktop}) {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    & article {
      flex: 1;

      & > img {
        border-radius: 0;
      }
    }
  }
`;

export const Articles = styled.div``;

export const Container = styled.section`
  background: rgba(62, 91, 86, 0.61);

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 100px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }

  @media (min-width: ${screens.desktop}) {
    text-align: left;
  }
`;
