import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { screens } from "../../../helper/styles_variables";
const backgroundAnimation = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const CTAbtn = styled(Link)`
  background: #41775c;
  border-radius: 15px;
  padding: 20px 35px;
  margin: 40px;

  font-weight: 600;
  font-size: 24px;
  line-height: 31px;

  color: #ffffff;
  text-decoration: none;

  text-align: center;
`;

export const CTAImage = styled.img`
  position: absolute;
  width: 90%;

  top: -50%;
  left: -20%;

  z-index: 0;
`;

export const Heading = styled.h1`
  font-weight: 400;
  font-size: 64px;
  text-align: center;

  max-width: 600px;

  color: #ffffff;

  padding: 0;
  margin: 0;
  margin-top: 200px;
`;

export const Subheading = styled.h3`
  font-weight: 400;
  font-size: 32px;
  text-align: center;

  color: #ffffff;

  padding: 0;
  margin: 40px 0 0;
`;

export const Container = styled.section`
  background: linear-gradient(124deg, #09201d, #0e1817, #156341);
  background-size: 180% 180%;
  animation: ${backgroundAnimation} 18s ease infinite;

  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 100px 2.5%;
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }

  @media (max-width: ${screens.desktop}) {
    padding: 20px 0.5%;
  }
`;
