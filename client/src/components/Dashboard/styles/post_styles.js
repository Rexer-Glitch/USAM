import styled from "styled-components";
import { screens } from "../../../helper/styles_variables";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);

  border: 0.5px solid rgba(0, 0, 0, 0.2);
  background: none;
  border-radius: 5px;
  padding: 6px 15px;

  font-size: 14px;

  margin: 10px 0;

  cursor: pointer;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #515151;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;

  color: #424242;
  margin: 10px 0;

  text-transform: capitalize;
`;

export const AuthorDate = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #515151;

  margin: 5px 0;
`;

export const Image = styled.img`
  display: inline-block;
  height: 270px;
  width: 100%;

  object-fit: cover;

  background: #272727;
  border-radius: 8px 8px 0 0;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: grey;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  flex: 0 0 50%;

  @media (max-width: ${screens.tablet}) {
    max-width: 100%;
  }
`;
