import styled from "styled-components";
import { Link } from "react-router-dom";

export const Btn = styled(Link)`
  text-decoration: none;
  color: #744848;
  font-size: 1.2rem;
  transition: all ease-in-out 250ms;

  &:hover {
    filter: invert(30%);
  }
`;

export const CTABtns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 80px;


    & ${Btn}:nth-child(even) {
        position: relative;
        margin: 0 20px;
         &::before, &::after{
            content: "|";
            position: absolute;
            left: -10px;

         }

         &::after {
            right: -10px;
            left: unset;
         }
    }

`;

export const Container = styled.div`
  padding: 100px 20%;

  font-size: 30px;

  & h1,
  h3 {
    color: #744848;
    padding: 50px 0;
    font-size: 35px;
  }


  & li {
      list-style: none;
      padding: 15px;
      
      cursor: pointer;
    }

    @media (max-width: 769px) {
        padding: 150px 20px 100px;
        text-align: center;
  }
`;
