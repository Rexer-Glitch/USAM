import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
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
  NotificationText,
} from "./styles/login_styles";

import GoogleImage from "../assets/Google.png";

import AnimatedTextWord from "../components/Common/animatedTextByWord";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notificationText, setNotificationText] = useState("");

  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    const result = await Login(email, password);
    if (result === true) {
      setNotificationText("");
      navigate("/dashboard");
    } else {
      setNotificationText(result);
    }
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    setNotificationText("");
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
    setNotificationText("");
  };

  return (
    <Container>
      <Nav isDarkTheme={false} />
      <Content>
        <LoginFormContainer>
          <Heading>
            <span>W</span>elcome back
          </Heading>
          <Subheading>Sign In to Continue Making a Difference</Subheading>
          <Form onSubmit={handleSubmit}>
            <Button>
              <img src={GoogleImage} alt={"Google icon"} /> Sign in with Google
            </Button>
            <Break>OR</Break>
            <Textbox
              type="text"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            ></Textbox>
            <Textbox
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            ></Textbox>
            <SigninButton>Sign in</SigninButton>
            <ForgotPasswordContainer>
              Forgot your password?{" "}
              <ForgotPasswordLink to="/account/forgot_password">
                Reset it
              </ForgotPasswordLink>
            </ForgotPasswordContainer>
            <NotificationText>{notificationText}</NotificationText>
          </Form>
        </LoginFormContainer>
        <BannerContainer>
          <AnimatedTextWord text="The United States of Africa welcomes you" />
        </BannerContainer>
      </Content>
    </Container>
  );
}

export default Login;
