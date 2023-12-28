import styled from "styled-components";

export const Date = styled.p``;

export const Name = styled.p``;

export const Avatar = styled.div`
  background: #272727;
  border-radius: 50%;

  width: 48px;
  height: 48px
`;
 


export const AuthorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  
  font-size: max(1.2rem, 2.5%, 1.2vw);
  font-weight: bold;
  text-transform: capitalize;
`;

export const Content = styled.div`
  margin-top: 50px;
  font-size: 24px;

  max-width: 1200px;

 
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;

  object-fit: cover;

  border-radius: 5px 5px 5px 5px;

  background: #999999;
`;

export const CoverContainer = styled.div`
  width: clamp(200px, 100%, 1200px);
  margin: 20px;

  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 56px;
  margin: 20px 0;
`;

export const ArticleContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

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

  position: relative;
 
`;
