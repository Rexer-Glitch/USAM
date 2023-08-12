import styled from "styled-components";

export const Content = styled.div``;

export const DateContainer = styled.div`
  & p {
    margin-bottom: 10px;
  }
`;

export const UserBubble = styled.div`
  width: 30px;
  height: 30px;

  background: #999999;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const UserContainer = styled.div``;

export const UserDateContainer = styled.div`
  width: 100%;

  position: absolute;
  bottom: 2px;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  color: white;

  border-radius: 0 0 5px 5px;

  display: flex;
  align-items: flex-start;

  gap: 50px;

  font-size: 12px;

  padding: 10px;

  & p {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;

  object-fit: cover;

  border-radius: 5px 5px 5px 5px;

  background: #999999;
`;

export const CoverUserDateContainer = styled.div`
  position: relative;
  margin: 20px;
`;

export const Title = styled.h1``;

export const ArticleContainer = styled.div`
  padding: 50px;

  @media (max-width: 400px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #edf9f7;

  overflow: auto;

  background: white;
`;
