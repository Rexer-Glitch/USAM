import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  padding: 20px;

  min-width: 350px;

  & h1 {
    font-size: 20px;

    margin-bottom: 10px;
  }
`;


export const EventContainer = styled.div`
  color: black;

  display: flex;
  align-items: center;

  padding: 5px 0;
`;


export const Events = styled(Link)`
  width: 100%;
  text-decoration: none;

  & ${EventContainer} + ${EventContainer} {
    margin-top: 10px;
    border-top: 1px solid rgba(0,0,0,0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 30px;
  height: 30px;

  background-color: #272727;
  border-radius: 50%;

  margin-right: 10px;
`;

export const TextContainer = styled.div``;

export const Image = styled.img`
  color: transparent;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 12px;
`;
