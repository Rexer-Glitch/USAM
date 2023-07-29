import { Link } from "react-router-dom";
import styled from "styled-components";
import { screens, globalPadding } from "../../../helper/styles_variables";

export const Button = styled(Link)`
  background: #41775c;
  border-radius: 15px;

  padding: 15px 15px;

  text-align: center;
  text-decoration: none;
  font-size: 20px;
  color: white;

  cursor: pointer;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 50px 0;

  & div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 0 auto;

    @media (min-width: ${screens.tablet}) {
      grid-template-columns: repeat(4, 1fr);
    }

    & img {
      width: 60%;
      display: block;
      margin: auto;
    }
  }
`;

export const Container = styled.section`
  background: #613c3c;
  color: white;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }
`;
