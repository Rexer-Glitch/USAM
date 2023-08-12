import { Container, Heading, Subheading, CTAbtn } from "./styles/header_styles";

function Header() {
  return (
    <Container>
      <Heading>Welcome to United States Of Africa</Heading>
      <Subheading>Unite. Empower. Transform.</Subheading>
      <CTAbtn to={"/signup"}>Become A Member</CTAbtn>
    </Container>
  );
}

export default Header;
