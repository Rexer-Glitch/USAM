import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  padding-top: 65px;

  height: 100vh;
  width: 100%;
`;

export const Content = styled.main`
  flex: 3;
  padding: 16px 10%;
  max-height: 100%;
  overflow: auto;
`;

//Sidebar
export const Sidebar = styled.aside`
  flex: 1;
  background-color: #f0f0f0;
  padding: 16px;

  max-width: 300px;
  display: ${(props) => (props.visible ? "block" : "none")};

  & ul {
    display: flex;
    justify-content: center;
    flex-direction: column;

    & li {
      list-style: none;
      padding: 15px 10px;

      font-size: 20px;
      
      cursor: pointer;
    }

    & .active {
      background:  #744848;
      color: white;

      border-radius: 5px;
    }
  }

  @media (min-width: 769px) {
    display: block;
    width: 100%;
  }
`;
