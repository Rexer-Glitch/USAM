import styled from "styled-components";
import { Link as link } from "react-router-dom";
import { Sidebar } from "../../pages/styles/membership_styles";

export const Section = styled.section`
  & h1 {
    text-align: center;
    padding: 40px 0;
    color: #744848;
    font-weight: semi-bold;
  }

  & p,
  strong {
    font-size: 32px;
    padding: 0 40px;
  }

  & p + p {
    margin-top: 40px;
  }

  & strong {
    text-align: center;
    display: block;
    padding: 40px;
  }

  & ol {
    counter-reset: list-number;
    padding-bottom: 40px;

    & li {
      font-size: 32px;
      list-style: none;

      &::before {
        counter-increment: list-number;
        content: counter(list-number);
        font-size: 60px;
        font-weight: bold;
        padding: 10px;
      }
    }

    & li + li {
      margin-top: 50px;
    }
  }
`;



// Controller styles
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 50px 20px;
`;

export const Link = styled(link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  color: #744848;

  &:hover {
    filter: invert(20%);
  }
`;

//Constitution
export const ArticleSelector = styled.div``;

export const Content = styled.div``;

