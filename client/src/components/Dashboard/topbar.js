import { useContext } from "react";
import {
  Container,
  SearchbarContainer,
  UserNotificationContainer,
  SearchIcon,
  Textbox,
  Icon,
  Links,
  Link,
  ProfileBubble,
  MenuContainer,
  NotificationsContainer,
} from "./styles/topbar_styles";
import useScreenSize from "../../hooks/useScreenSize";
import { DashboardContext } from "../../contexts/dashbboardContext";
import { AuthContext } from "../../contexts/authContext";

import search from "../../assets/Search.png";
import notifications from "../../assets/Notifications.png";
import messages from "../../assets/Messages.png";
import Menu from "../../assets/Menu_dark.svg";

function Topbar() {
  const screenSize = useScreenSize();
  const { setShowMenu } = useContext(DashboardContext);
  const { user } = useContext(AuthContext);
  return (
    <Container>
      {screenSize > 768 && (
        <SearchbarContainer>
          <SearchIcon src={search} alt="search icon" />
          <Textbox type="text" placeholder="Type to search" />
        </SearchbarContainer>
      )}

      <UserNotificationContainer>
        <Links>
          {screenSize < 768 && (
            <MenuContainer onClick={() => setShowMenu(true)}>
              <Icon src={Menu} alt="hamburger menu icon" />
            </MenuContainer>
          )}
          <NotificationsContainer>
            <Link to="/dashboard/nofications">
              <Icon src={notifications} alt="notifications icon" />
            </Link>
            <Link to="/dashboard/messages">
              <Icon src={messages} alt="messages icon" />
            </Link>
          </NotificationsContainer>
          <ProfileBubble>{user && user.username[0]}</ProfileBubble>
        </Links>
      </UserNotificationContainer>
    </Container>
  );
}

export default Topbar;
