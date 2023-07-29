import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { screens } from "../../../helper/styles_variables";
import { globalPadding } from "../../../helper/styles_variables";

export const LogoContainer = styled.div`
  font-weight: 400;
  font-size: 3.4rem;
  line-height: 69px;
`;

export const NavLinkContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px 0;

  background: #2c4844;
  opacity: 0.99;

  position: absolute;
  top: 90%;
  width: 100%;

  overflow: hidden;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  & li {
    list-style: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;

  color: white;

  font-weight: 400;
  font-size: 1.5rem;
  line-height: 240%;

  ${(props) =>
    props.isLinkActive === true &&
    `
        background: rgba(217, 217, 217, 0.32);
        border-radius: 20px;
        padding: 10px 15px;
    `}
`;

export const MembershipLinks = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & ${NavLink} {
    border: 1px solid grey;
    border-radius: 15px;
    padding: 0px 15px;
    margin: 10px 0px 20px;
  }

  & ${NavLink}:last-child {
    display: none;
  }

  @media (min-width: ${screens.tablet}) {
    & ${NavLink} {
      margin: 0;
    }
  }

  @media (min-width: ${screens.desktop}) {
    & ${NavLink}:last-child {
      display: inline-block;

      margin: 0 10px;
    }
  }
`;

export const MenuContainer = styled.div`
  outline: none;

  @media (min-width: ${screens.tablet}) {
    display: none;
  }
`;

export const HMenu = styled.img`
  cursor: pointer;
  outline: none;
`;

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 50px;

  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 10;

  @media (max-width: ${screens.mobile}) {
    padding: 20px;
  }

  background: transparent;

  transition: all ease-in-out 250ms;

  & ${LogoContainer} {
    color: ${(props) => (props.isDarkTheme === true ? "white" : "black")};
  }

  ${(props) =>
    props.withShadow === true && "box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);"}

  @media (min-width: ${screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    & ${NavLinkContainer} {
      position: unset;
      top: unset;

      padding: 0;
      background: unset;

      width: auto;

      flex-direction: row;

      gap: 20px;

      overflow: unset;

      box-shadow: unset;

      & ${NavLink} {
        color: ${(props) => (props.isDarkTheme === true ? "white" : "black")};
        font-size: 22px;
      }
    }
  }

  @media (min-width: ${screens.tablet}) and (max-width: ${screens.desktop}) {
    & ${LogoContainer} {
      font-size: 2.5rem;
    }
    & ${NavLinkContainer} {
      position: unset;
      top: unset;

      padding: 0;
      background: unset;

      width: auto;

      flex-direction: row;

      gap: 15px;

      & ${NavLink} {
        color: ${(props) => (props.isDarkTheme === true ? "white" : "black")};
        font-size: 18px;
      }
    }
  }

  ${(props) =>
    props.isFixed === true &&
    `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    background: white;
    color: black;
  `}
`;
