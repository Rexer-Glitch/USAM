import {
  Container,
  Content,
  LoginFormContainer,
  BannerContainer,
  Nav,
  Heading,
  Subheading,
  Form,
  Button,
  Break,
  Textbox,
  SigninButton,
  ForgotPasswordContainer,
  ForgotPasswordLink,
} from "./styles/login_styles";

import GoogleImage from "../assets/Google.png";

function Login() {
  return (
    <Container>
      <Nav isDarkTheme={false} />
      <Content>
        <LoginFormContainer>
          <Heading>
            <span>W</span>elcome back
          </Heading>
          <Subheading>Sign In to Continue Making a Difference</Subheading>
          <Form>
            <Button>
              <img src={GoogleImage} alt={"Google icon"} /> Sign in with Google
            </Button>
            <Break>OR</Break>
            <Textbox type="text" placeholder="Email"></Textbox>
            <Textbox type="password" placeholder="Password"></Textbox>
            <SigninButton>Sign in</SigninButton>
            <ForgotPasswordContainer>
              Forgot your password?{" "}
              <ForgotPasswordLink to="/account/forgot_password">
                Reset it
              </ForgotPasswordLink>
            </ForgotPasswordContainer>
          </Form>
        </LoginFormContainer>
        <BannerContainer></BannerContainer>
      </Content>
    </Container>
  );
}

export default Login;
