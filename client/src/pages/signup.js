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

function SignUp() {
  return (
    <Container>
      <Nav isDarkTheme={false} />
      <Content>
        <LoginFormContainer>
          <Heading>
            <span>J</span>oin the United States of Africa Movement
          </Heading>
          <Subheading>Sign Up and Be Part of the Change</Subheading>
          <Form>
            <Button>
              <img src={GoogleImage} alt={"Google icon"} /> Sign up with Google
            </Button>
            <Break>OR</Break>
            <Textbox type="text" placeholder="Email"></Textbox>
            <Textbox type="password" placeholder="Password"></Textbox>
            <SigninButton>Create an account</SigninButton>
            <ForgotPasswordContainer>
              Already have an account?
              <ForgotPasswordLink to="/account/sign_in">
                Sign in
              </ForgotPasswordLink>
            </ForgotPasswordContainer>
          </Form>
        </LoginFormContainer>
        <BannerContainer></BannerContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
