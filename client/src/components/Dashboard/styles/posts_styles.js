import styled from "styled-components";
import { screens } from "../../../helper/styles_variables";

export const Button = styled.div``;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  padding: 10px 20px;
  margin-top: 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  background: white;

  border-radius: 6px;

  position: absolute;
  z-index: 10;
  cursor: pointer;

  & ${Button} {
    transition: all ease-in-out 0.25s;
    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const FilterButtonContainer = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: normal;
  font-size: 15px;

  position: relative;
  & > ${Button} {
    display: inline-block;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 5px 20px;

    transition: all ease-in-out 0.25s;
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.05);
      box-shadow: 0px -0.5px 1px rgba(0, 0, 0, 0.2) inset;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const OptionsContainer = styled.div`
  margin-bottom: 50px;
`;

export const PostsContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${screens.tablet}) {

    & div + div {
      margin-top: 40px;
    }
  }
`;

export const Container = styled.div`
  width: auto;
  border-radius: 8px;

  margin: 10px 0 10px 20px ;
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
  }
`;
