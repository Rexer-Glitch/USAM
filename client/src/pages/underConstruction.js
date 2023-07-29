import {
  Container,
  Heading,
  TextContainer,
  Subheading,
  SocialContainer,
  Link,
  Icon,
} from "./styles/underConstruction_styles";
import Navigation from "../components/Common/nav";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/YouTube.svg";
import Tiktok from "../assets/TikTok.svg";

function UnderConstruction() {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for icons
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Navigation />
      <Container>
        
        <TextContainer
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Heading>Prepare for a new Era</Heading>
          <Subheading>Page still under construction</Subheading>
        </TextContainer>
        <SocialContainer
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <Link
          variants={iconVariants}
          >
            <Icon src={Facebook} />
          </Link>
          <Link
          variants={iconVariants}
          >
            <Icon src={Twitter} />
          </Link>
          <Link
          variants={iconVariants}
          >
            <Icon src={Instagram} />
          </Link>
          <Link
          variants={iconVariants}
          >
            <Icon src={Youtube} />
          </Link>
          <Link
          variants={iconVariants}
          >
            <Icon src={Tiktok} />
          </Link>
        </SocialContainer>
      </Container>
    </>
  );
}

export default UnderConstruction;
