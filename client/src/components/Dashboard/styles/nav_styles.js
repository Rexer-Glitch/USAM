import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Copyright = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Navlink = styled(link)`
  font-weight: 400;
  font-size: 22px;
  line-height: 244%;

  color: #ffffff;

  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;

export const Navlinks = styled.li`
  list-style: none;
`;

export const Bubble = styled.span`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #744848;

  border-radius: 50%;

  font-size: 0.9rem;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Icon = styled.img``;

export const Link = styled(link)`
  & ${Icon} {
    width: 35px;
    height: 35px;
  }
`;
export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
`;

export const NavLinkGroup = styled.div`
  & > label {
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;

    color: #ffffff;
  }

  & ul {
    padding: 20px 10px;
  }
`;

export const SocialContainer = styled.div``;

export const SocialCopyrightContainer = styled.section`
  position: absolute;
  bottom: 0;

  width: 100%;

  text-align: center;

  padding: 10px;

  border-top: 1px solid rgba(2555, 255, 255, 0.15);
`;

export const NavlinksContainer = styled.section`
  padding: 10px;
`;

export const LogoContainer = styled.section`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;

  color: #ffffff;

  padding: 10px;

  border-bottom: 1px solid rgba(2555, 255, 255, 0.15);
`;

export const Container = styled.nav`
  position: relative;
  height: 100vh;
  width: 250px;

  background: #2c4844;
  color: white;

  transition: all ease-in-out 250ms;

  ${(props) =>
    props.isIconVersion === true &&
    `
    & ${NavLinkGroup} label {
        display: none;
    }

    & ${Bubble} {
        display: none;
    }

    & ul, li {
        padding: 0;
    }

    & li + li {
        margin-top: 20px;
    }

    & ${NavLinkGroup} {
        margin: 30px 0;
    }

    width: 55px;
    padding: 0;

  `}
`;
