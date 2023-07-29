import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../../components/Common/nav";
import { screens } from "../../helper/styles_variables";

export const ForgotPasswordLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ForgotPasswordContainer = styled.p`
  margin-top: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  color: #5e5e5e;

  text-align: left;
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  text-align: center;

  color: #000000;

  & span {
    font-size: 64px;
  }
`;

export const Subheading = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  color: #000000;

  margin: 20px 0 40px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

export const Button = styled.button`
  border: 2px solid #162422;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  background: transparent;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 15px 30px;

  margin-bottom: 50px;
`;

export const Break = styled.div`
  text-align: center;
  font-size: 24px;
  display: inline;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    background: black;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -45px;
  }

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    background: black;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -45px;
  }
`;

export const Textbox = styled.input`
  display: block;

  width: 100%;
  padding: 15px 30px;
  border: 2px solid #162422;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;

  margin: 40px 0;
`;

export const SigninButton = styled.button`
  background: #744848;
  border: 2px solid #162422;
  border-radius: 20px;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  width: 100%;
  padding: 15px 30px;
`;

export const Nav = styled(Navigation)`
  position: absolute;
  top: 0;
  left: 0;

  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 200px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerContainer = styled.div`
  background: #162422;
  flex: 1;
  min-height: 100vh;

  @media (max-width: ${screens.desktop}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  text-align: center;
`;

export const Container = styled.div``;
