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
import { AuthContext } from "../contexts/authContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationServices from "../services/auth";
import { isPasswordValid, isEmailValid } from "../helper/validation";

function SignUp() {
  const { Signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [IsUNavailable, setIsUNavailable] = useState(false);

  const [notificationText, setNotificationText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      setNotificationText("Please enter your username, email and password");
      return;
    }

    if (IsUNavailable) {
      setNotificationText("Username taken, please enter another");
      return;
    }

    if (!isEmailValid(email)) {
      setNotificationText("Please enter a valid email");
      return;
    }

    if (!isPasswordValid(password)) {
      setNotificationText(
        "Invalid password (must have at least 8 characters, 1 uppercase, 1 lowercase, 1 digit)"
      );
      return;
    }

    const result = await Signup(username, email, password);
    console.log(result);
    if (result === true) {
      setNotificationText("");
      navigate("/dashboard");
      return;
    }

    setNotificationText(result);
  };

  useEffect(() => {
    AuthenticationServices.IsUsernameAvailable(username).then((result) => {
      setIsUNavailable(result);
    });
  }, [username, setIsUNavailable]);

  return (
    <Container>
      <Nav isDarkTheme={false} />
      <Content>
        <LoginFormContainer>
          <Heading>
            <span>J</span>oin the United States of Africa Movement
          </Heading>
          <Subheading>Sign Up and Be Part of the Change</Subheading>
          <Form onSubmit={handleSubmit}>
            <Button>
              <img src={GoogleImage} alt={"Google icon"} /> Sign up with Google
            </Button>
            <Break>OR</Break>
            <Textbox
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              inValid={IsUNavailable || username.trim().length === 0}
            />
            <Textbox
              type="text"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              inValid={!isEmailValid(email)}
            />
            <Textbox
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              inValid={!isPasswordValid(password)}
            />
            <SigninButton>Create an account</SigninButton>
            <ForgotPasswordContainer>
              Already have an account?
              <ForgotPasswordLink to="/account/sign_in">
                Sign in
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

export default SignUp;
