import {
  Container,
  LogoContainer,
  NavLinkContainer,
  MembershipLinks,
  NavLink,
  MenuContainer,
  HMenu,
  CloseMenu,
} from "./styles/nav_styles";
import MenuIcon from "../../assets/Menu.svg";
import MenuDarkIcon from "../../assets/Menu_dark.svg";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import useScrollPosition from "../../hooks/useScrollPosition";

function Navigation({
  isDarkTheme = false,
  withShadow = true,
  applyPadding = false,
  ...root
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(
    window.innerWidth >= 768 ? true : false
  );

  const scrollHeight = useScrollPosition();
  const navLinkContainerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActiveLink = (name) => {
    const path = window.location.pathname;
    if (path === name) return true;

    return path.replace(/\//g, "").includes(name);
  };

  useEffect(() => {
    const updateMenuOnWindowResize = () => {
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      } else setIsMenuOpen(true);
    };
    window.addEventListener("resize", updateMenuOnWindowResize);
    return () => window.removeEventListener("resize", updateMenuOnWindowResize);
  }, [setIsMenuOpen]);

  return (
    <Container
      isDarkTheme={isDarkTheme && scrollHeight <= 50}
      isFixed={scrollHeight >= 50}
      isMenuOpen={isMenuOpen}
      withShadow={scrollHeight >= 50}
      applyPadding={applyPadding}
      {...root}
    >
      <LogoContainer>LOGO</LogoContainer>
      <AnimatePresence>
        {isMenuOpen && (
          <NavLinkContainer
            initial={{ left: "100vw" }}
            animate={{ left: 0 }}
            exit={{ left: "100vw" }}
            ref={navLinkContainerRef}
          >
            <CloseMenu onClick={() => setIsMenuOpen(false)}></CloseMenu>
            <li>
              <NavLink to="/" isLinkActive={isActiveLink("/")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about_us" isLinkActive={isActiveLink("about")}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/get_involved" isLinkActive={isActiveLink("get")}>
                Get Involved
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" isLinkActive={isActiveLink("blog")}>
                Blog
              </NavLink>
            </li>
            <MembershipLinks>
              <NavLink to="/login" isLinkActive={isActiveLink("sign_in")}>
                Log in
              </NavLink>
              <NavLink to="/signup" isLinkActive={isActiveLink("sign_up")}>
                Sign up
              </NavLink>
            </MembershipLinks>
            <li>
              <NavLink
                style={{
                  background: "#744848",
                  padding: "15px 20px",
                  borderRadius: "25px",
                  color: "white",
                }}
                to="/donate"
                isLinkActive={isActiveLink("donate")}
              >
                Donate
              </NavLink>
            </li>
          </NavLinkContainer>
        )}
      </AnimatePresence>
      <MenuContainer onClick={toggleMenu}>
        <HMenu
          src={
            scrollHeight <= 50 && isDarkTheme === true ? MenuIcon : MenuDarkIcon
          }
          alt="Hamburger menu"
        />
      </MenuContainer>
    </Container>
  );
}

export default Navigation;
