import {
  Container,
  SearchbarContainer,
  UserNotificationContainer,
  SearchIcon,
  Textbox,
  Icon,
  Links,
  ProfileBubble,
} from "./styles/topbar_styles";

import search from "../../assets/Search.png";
import notifications from "../../assets/Notifications.png";
import messages from "../../assets/Messages.png";

function Topbar() {
  return (
    <Container>
      <SearchbarContainer>
        <SearchIcon src={search} alt="search icon" />
        <Textbox type="text" placeholder="Type to search" />
      </SearchbarContainer>

      <UserNotificationContainer>
        <Links>
          <Icon src={notifications} alt="notifications icon" />
          <Icon src={messages} alt="messages icon" />
          <ProfileBubble></ProfileBubble>
        </Links>
      </UserNotificationContainer>
    </Container>
  );
}

export default Topbar;
