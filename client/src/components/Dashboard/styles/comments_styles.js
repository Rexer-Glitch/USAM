import styled from "styled-components";

export const Exit = styled.div`
  height: 25px;
  width: 35px;
  position: relative;

  float: right;

  cursor: pointer;

  margin-bottom: 50px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: black;

    height: 100%;
    width: 3px;
  }

  &::before {
    transform: rotateZ(45deg);
  }

  &::after {
    transform: rotateZ(-45deg);
  }
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;

  z-index: 10;

  position: absolute;

  top: 0;
  left: 0;

  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  padding: 20px 40px 20px 20px;
  height: 100vh;
  overflow: auto;

  background-color: #fff;
  z-index: 11;
  @media (min-width: 768px) {
    position: absolute;
    width: 400px;
    right: 0;
    top: 0;

    
  }
`;

export const Container = styled.div`
  

`;
