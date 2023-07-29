import {
  Container,
  NewsletterContainer,
  TextContainer,
  Heading,
  Subheading,
  NewsletterForm,
  Textbox,
  SubmitButton,
  LogoLinksContainer,
  LogoContainer,
  LinksContainer,
  Links,
  Link,
  Logo,
  Motto,
  Break,
  CopyrightSocialContainer,
  Copyright,
  SocialContainer,
  Icon
} from "./styles/footer_styles";

import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Youtube from "../../assets/YouTube.svg";
import Tiktok from "../../assets/TikTok.svg";


function Footer() {
  return (
    <Container>
      <NewsletterContainer>
        <TextContainer>
          <Heading>Sign up to our newsletter</Heading>
          <Subheading>
            Stay up to date with the latest news, announcements, and articles
          </Subheading>
        </TextContainer>
        <NewsletterForm>
          <Textbox placeholder="Enter your email" />
          <SubmitButton>Subscribe</SubmitButton>
        </NewsletterForm>
      </NewsletterContainer>

      <LogoLinksContainer>
        <LogoContainer>
          <Logo>LOGO</Logo>
          <Motto>Unite. Empower. Transform.</Motto>
        </LogoContainer>
        <LinksContainer>
          <Links>
            <Heading>USAM</Heading>
            <li><Link to={"/about_us"}>About us</Link></li>
            <li><Link to={"/membership"}>Become a member</Link></li>
            <li><Link to={"/get_involved"}>Get Involved</Link></li>
            <li><Link to={"/donate"}>Donate</Link></li>
          </Links>
          <Links>
            <Heading>Resources</Heading>
            <li><Link to={"/blog"}>Blog</Link></li>
            <li><Link to={"/newsletter"}>Newsletter</Link></li>
            <li><Link to={"/events"}>Events</Link></li>
          </Links>
          <Links>
            <Heading>Social</Heading>
            <li><Link to={""}>Facebook</Link></li>
            <li><Link to={""}>Twitter</Link></li>
            <li><Link to={""}>Instagram</Link></li>
            <li><Link to={""}>Youtube</Link></li>
            <li><Link to={""}>Tiktok</Link></li>
          </Links>
          <Links>
            <Heading>Legal</Heading>
            <li><Link to={"/terms_and_conditions"}>Terms</Link></li>
            <li><Link to={"/terms_and_conditions#privacy"}>Privacy</Link></li>
            <li><Link to={"/terms_and_conditions#cookies"}>Cookies</Link></li>
            <li><Link to={"/about_us"}>About</Link></li>
          </Links>
        </LinksContainer>
      </LogoLinksContainer>

      <Break />

      <CopyrightSocialContainer>
        <Copyright>©2023 USAM. All rights reserved.</Copyright>
        <SocialContainer>
            <Link><Icon src={Facebook}/></Link>
            <Link><Icon src={Twitter}/></Link>
            <Link><Icon src={Instagram}/></Link>
            <Link><Icon src={Youtube}/></Link>
            <Link><Icon src={Tiktok}/></Link>
        </SocialContainer>
      </CopyrightSocialContainer>
    </Container>
  );
}

export default Footer;
