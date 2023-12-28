import { useEffect, useState, useContext } from "react";
import {
  Container,
  LogoContainer,
  NavlinksContainer,
  SocialCopyrightContainer,
  SocialContainer,
  IconTextContainer,
  Icon,
  Link,
  Copyright,
  Label,
  Bubble,
  Navlinks,
  Navlink,
} from "./styles/nav_styles";
import useScreenSize from "../../hooks/useScreenSize";
import { DashboardContext } from "../../contexts/dashbboardContext";

import msgIcon from "../../assets/Chat Bubble.png";
import peopleIcon from "../../assets/Business Conference Female Speaker.png";
import postsIcon from "../../assets/News.png";
import profileIcon from "../../assets/Female Profile.png";
import eventsIcon from "../../assets/Event Accepted.png";
import bookmarkIcon from "../../assets/Bookmark.png";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Youtube from "../../assets/YouTube.svg";
import Tiktok from "../../assets/TikTok.svg";
import logoLight from "../../assets/logo_Light.png"

function Navigation() {
  const { isShowMenu, setShowMenu } = useContext(DashboardContext);
  const [isIconVersion, setIsIconVersion] = useState(true);
  const screenSize = useScreenSize();

  const handleOnMouseEnter = () => {
    if (screenSize < 768) return;
    setIsIconVersion(false);
  };

  useEffect(() => {
    if (screenSize > 768) setShowMenu(true);
  }, [screenSize, setShowMenu]);

  return (
    <>
      {isShowMenu && (
        <Container
          isIconVersion={isIconVersion && screenSize > 768}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={() => setIsIconVersion(true)}
        >
          <LogoContainer>
          <img src={logoLight} alt="USAM Logo"/>
            {screenSize < 768 && <div onClick={() => setShowMenu(false)}></div>}
          </LogoContainer>

          <NavlinksContainer>
        
              <ul>
                <Navlinks>
                  <Navlink to="/dashboard/messages">
                    <IconTextContainer>
                      <Icon src={msgIcon} alt="message icon" />{" "}
                      <Label>Messages</Label>
                    </IconTextContainer>
                    <Bubble>2</Bubble>
                  </Navlink>
                </Navlinks>
                <Navlinks>
                  <Navlink to="/dashboard/connect">
                    <IconTextContainer>
                      <Icon src={peopleIcon} alt="people icon" />{" "}
                      <Label>People</Label>
                    </IconTextContainer>
                  </Navlink>
                </Navlinks>
                <Navlinks>
                  <Navlink to="/dashboard/profile">
                    <IconTextContainer>
                      <Icon src={profileIcon} alt="profile icon" />{" "}
                      <Label>Profile</Label>
                    </IconTextContainer>
                  </Navlink>
                </Navlinks>
              </ul>
           
              <ul>
                <Navlinks>
                  <Navlink to="/dashboard/events">
                    <IconTextContainer>
                      <Icon src={eventsIcon} alt="events icon" />{" "}
                      <Label>Events</Label>
                    </IconTextContainer>
                  </Navlink>
                </Navlinks>
                <Navlinks>
                  <Navlink to="/dashboard/bookmark">
                    <IconTextContainer>
                      <Icon src={bookmarkIcon} alt="bookmark icon" />{" "}
                      <Label>Saved</Label>
                    </IconTextContainer>
                  </Navlink>
                </Navlinks>
              </ul>
          </NavlinksContainer>

          {!isIconVersion && (
            <SocialCopyrightContainer>
              <SocialContainer>
                <Link>
                  <Icon src={Facebook} alt="facebook icon" />
                </Link>
                <Link>
                  <Icon src={Twitter} alt="twitter icon" />
                </Link>
                <Link>
                  <Icon src={Instagram} alt="instagram icon" />
                </Link>
                <Link>
                  <Icon src={Youtube} alt="youtube icon" />
                </Link>
                <Link>
                  <Icon src={Tiktok} alt="tiktok icon" />
                </Link>
              </SocialContainer>
              <Copyright>©2023 USAM. All rights reserved.</Copyright>
            </SocialCopyrightContainer>
          )}
        </Container>
      )}
    </>
  );
}

export default Navigation;
