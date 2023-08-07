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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notificationText, setNotificationText] = useState("");
  const { setUserToken, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, set user token and isAuthenticated
        setUserToken(data.token);
        setIsAuthenticated(true);
        setNotificationText("");
        navigate("/dashboard");
      } else {
        setNotificationText(data.message);
      }
    } catch (error) {
      setNotificationText("Error, please try again later");
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
        <BannerContainer></BannerContainer>
      </Content>
    </Container>
  );
}

export default Login;
