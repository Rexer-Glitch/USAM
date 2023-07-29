import styled from "styled-components";
import { Link } from "react-router-dom";
import { screens, globalPadding } from "../../../helper/styles_variables";

export const Button = styled(Link)`
  background: #41775c;
  border-radius: 15px;

  padding: 15px 15px;

  text-decoration: none;
  font-size: 20px;
  color: white;

  cursor: pointer;
`;

export const Icon = styled.img``;

export const Title = styled.h3`
  font-size: 32px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
`;

export const Card = styled.div`
  background: rgba(217, 217, 217, 0.01);
  border-radius: 15px;

  width: 100%;

  padding: 30px 50px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);

  @media (min-width: ${screens.tablet}) {
    max-width: 400px;
    padding: 20px 25px;
    width: calc(100% / 3 - 25px);
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: 100px 0 100px;

  @media (min-width: ${screens.tablet}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;

    gap: auto;
  }
`;

export const Container = styled.section`
  background: #0e1817;
  color: white;

  min-height: 100vh;

  padding: 100px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 100px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }

  & h1 {
    font-size: 48px;

    & span {
      font-size: 96px;
    }
  }

  & p {
    font-size: 24px;

    margin: 50px 0;

    max-width: 800px;
  }
`;
