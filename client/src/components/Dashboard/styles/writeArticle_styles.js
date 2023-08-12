import styled from "styled-components";

export const AreYouSure = styled.div`
  position: absolute;
  z-index: 10;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: #cccccc;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 8px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px 0 0 0;

    & button {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background: none;
      padding: 5px 15px;
      transition: background 0.25 ease-in-out;

      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  & p {
    font-size: 18px;
  }
`;

export const EditingArea = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  height: 100%;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Publish = styled.button`
  font-weight: bold;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 5px 10px;
  margin: 2px;

  transition: all ease-in-out 250ms;

  cursor: pointer;

  &:hover {
    background: #2c4844;
    color: white;

    & ${Icon} {
      filter: invert(100%);
    }
  }
  &:active {
    background: #2c4844;
    color: white;

    & ${Icon} {
      filter: invert(100%);
    }
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  text-decoration: capitalize;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 2.5px 20px;
  border-radius: 8px 8px 0 0;
`;

export const Button = styled.button`
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px 20px;

  font-size: 18px;

  color: rgba(0, 0, 0, 0.7);

  transition: all ease-in-out 250ms;

  cursor: pointer;

  &:hover {
    background: #2c4844;
    color: white;
  }
`;
export const Textbox = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  min-width: 400px;
  border-radius: 8px;

  margin: 20px 0;

  text-align: center;
  font-size: 20px;
`;

export const CardHeader = styled.h3`
  color: rgba(0, 0, 0, 0.7);
`;

export const Card = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 90%;

  padding: 20px 50px;

  overflow: auto;
`;

export const BackFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const EditorWindow = styled.div`
  width: 80vw;
  height: 80vh;

  background: white;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  position: absolute;
`;

export const EditorContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const UserBubble = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #272727;
  color: white;

  border-radius: 50%;

  text-transform: uppercase;
  font-size: 22px;
  font-weight: normal;
`;

export const Container = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 5px 10px 5px 5px;

  background: white;

  font-weight: bold;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #2c4844;
    color: white;
    border-radius: 40px;

    & ${UserBubble} {
      background: white;
      color: black;
    }
  }

  margin: 50px 20px;
`;
