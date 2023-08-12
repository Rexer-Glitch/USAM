import styled from "styled-components";
import { Link as a } from "react-router-dom";

import { globalPadding, screens } from "../../../helper/styles_variables";

export const Heading = styled.h1``;
export const Subheading = styled.h3``;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  line-height: 1.5;
  & ${Heading} {
    font-size: 1.5rem;
    font-weight: 500;
  }

  & ${Subheading} {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 10px;
  }
`;

export const Textbox = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 20px 15px;
  border-radius: 10px;

  background: #d9d9d9;
  border: 2px solid rgba(9, 32, 29, 0.81);
  border-radius: 8px;
  outline: none;

  text-align: center;
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 20px 15px;

  background: rgba(9, 32, 29, 0.81);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: 2px solid rgba(9, 32, 29, 0.81);

  color: white;
`;

export const NewsletterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewsletterContainer = styled.section`
  @media (min-width: ${screens.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;

    & ${TextContainer} {
      display: block;
      text-align: left;
      & ${Heading} {
        font-size: 2rem;
      }

      & ${Subheading} {
        font-size: 1.2rem;
      }
    }

    & ${NewsletterForm} {
      width: 70%;
      flex-direction: row;
      gap: 20px;

      & ${Textbox} {
        flex: 5;
        padding: 15px 20px;
        font-size: 1.2rem;

        min-width: 200px;
      }

      & ${SubmitButton} {
        flex: 1;
        padding: 15px 20px;
        font-size: 1.1rem;
      }
    }
  }
`;

export const LogoContainer = styled.div``;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Links = styled.ul`
  padding: 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 26px;
  text-align: center;

  color: #ffffff;

  & ${Heading} {
    font-weight: 600;
  }

  & li {
    list-style: none;
  }

  @media (max-width: ${screens.mobile}) {
    line-height: 30px;
    &:nth-child(1) {
      margin: 50px 0 0;
    }
    &:nth-child(even) {
      margin: 20px 0;
    }
  }
`;
export const Link = styled(a)`
  text-decoration: none;
  color: white;
  line-height: 1.5;
`;

export const Logo = styled.h1`
  font-weight: 600;
  font-size: 3rem;
`;
export const Motto = styled.h3`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
`;

export const LogoLinksContainer = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: #ffffff;

  @media (min-width: ${screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;

    & ${LogoContainer} {
      flex: 3;
      & h1 {
        margin: 0;
      }
    }
    & ${LinksContainer} {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex: 5;

      min-width: 510px;
      max-width: 800px;

      & ${Links} {
        text-align: left;
        margin: 0;

        & h1 {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Container = styled.footer`
  background: #3e5b56;
  color: white;

  padding: 20px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 20px;
  }
`;

export const Break = styled.hr`
  border: 1px solid rgba(98, 108, 103, 0.54);

  margin: 30px 0;
`;

export const Icon = styled.img``;

export const Copyright = styled.p`
  order: 2;
  font-weight: 600;
  font-size: 1em;
  line-height: 20px;
`;

export const SocialContainer = styled.div`
  order: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const CopyrightSocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    & ${SocialContainer} {
      order: 3;
    }
  }
`;
