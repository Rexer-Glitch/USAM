import styled, {keyframes} from "styled-components";

const move = keyframes`
    0% {left: 0;}
    50% {left: 80%; -webkit-transform: rotate(450deg); width: 150px; height: 150px;}
    75% {left: 80%; -webkit-transform: rotate(450deg); width: 150px; height: 150px;}
    100% {right: 100%;}
  `;

export const Container = styled.div`
  background-image: linear-gradient(
  355deg,
  hsl(0deg 0% 0%) 0%,
  hsl(170deg 100% 10%) 58%,
  hsl(172deg 67% 22%) 100%
);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const InnerContainer = styled.div`
  width: 100%;


  overflow-x: hidden;
  overflow-y: hidden;
`;


export const Bar = styled.div`
  position: relative;
  height: 2px;
  width: 500px;
  margin: 0 auto;
  background: #fff;
  margin-top: 150px;
`;

export const Circle = styled.div`
  position: absolute;
  top: -30px;
  margin-left: -30px;
  height: 60px;
  width: 60px;
  left: 0;
  background: #fff;
  border-radius: 30%;
  animation: ${move} 5s infinite;
`;

export const Logo = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-family: helvetica, sans-serif;
  font-weight: bold;

  & img {
    width: 10%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;