import styled from "styled-components";
import { globalPadding, screens } from "../../../helper/styles_variables";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0 40px;

  & p {
    font-size: 32px;
    text-align: center;

    order: 1;

    & span {
      font-weight: 500;
      font-size: 40px;
    }
  }

  & img {
    order: 0;
    width: 90%;

    margin: 30px 0;
  }

  @media (min-width: ${screens.tablet}) {
    margin: 100px 0;

    & p {
      font-size: 40px;

      & span {
        font-size: 48px;
      }
    }

    & img {
      width: auto;
      margin: 0;
    }
  }

  @media (min-width: ${screens.desktop}) {
    flex-direction: row;

    & img {
      order: 2;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #aca77a;

  min-height: 100vh;

  padding: 100px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }

  & h1 {
    font-size: 48px;
    text-align: center;
    max-width: 600px;
    & span {
      font-size: 96px;
      font-weight: 500;
    }
  }

  @media (min-width: ${screens.tablet}) {
    padding: 100px ${globalPadding}px;

    & h1 {
      font-size: 64px;
      max-width: 800px;

      & span {
        font-size: 124px;
      }
    }
  }

  @media (min-width: ${screens.desktop}) {
    padding: 100px ${globalPadding * 2}px;
  }
`;
