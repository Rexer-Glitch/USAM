import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const ProfileBubble = styled.div`
  width: 50px;
  height: 50px;

  background: #272727;
  color: white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 22px;
`;

export const Link = styled(link)``;

export const Icon = styled.img``;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const SearchIcon = styled.img`
  cursor: pointer;
`;

export const Textbox = styled.input`
  padding: 5px 10px;
  border: none;
  outline: none;

  font-size: 20px;

  width: 400px;
`;

export const MenuContainer = styled.div``;

export const NotificationsContainer = styled.div``;

export const UserNotificationContainer = styled.div``;

export const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid #b1b1b1;
  border-radius: 8px;

  padding: 5px;
`;

export const Container = styled.div`
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 15px;

  @media (max-width: 768px) {
    & ${MenuContainer} {
      order: 3;
    }

    & ${NotificationsContainer} {
      order: 1;
    }

    & ${Links} {
      order: 2;
    }

    & ${UserNotificationContainer} {
      width: 100%;
    }
  }
`;
