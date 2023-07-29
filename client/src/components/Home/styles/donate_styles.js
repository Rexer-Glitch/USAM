import styled from "styled-components";
import { screens, globalPadding } from "../../../helper/styles_variables";

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  text-align: center;

  max-width: 600px;

  color: #000000;

  & span {
    font-size: 96px;
  }

  @media (min-width: ${screens.tablet}) {
    font-size: 64px;

    & span {
      font-size: 128px;
    }
  }

  @media (min-width: ${screens.desktop}) {
    text-align: left;
  }
`;

export const Para = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  max-width: 650px;

  color: #404040;

  margin: 40px 0;

  @media (min-width: ${screens.tablet}) {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
  }

  @media (min-width: ${screens.desktop}) {
    text-align: left;
  }
`;

export const ChooseAmountContainer = styled.div`
  margin: 20px 0;

  & input {
    width: 100%;

    background: rgba(65, 119, 92, 0.45);
    border: 2px solid rgba(51, 96, 74, 0.31);
    border-radius: 8px;

    padding: 10px 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    text-transform: capitalize;

    color: rgba(65, 119, 92, 0.96);
  }
`;

export const AmountSelectorContainer = styled.div`
  display: none;

  @media (min-width: ${screens.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;

    & input {
      display: none;

      &:checked + label {
        background: #744848;
        color: white;
      }
    }

    & label {
      padding: 5px 15px;
      border: 2px solid rgba(65, 119, 92, 0.45);
      border-radius: 8px;

      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      text-align: center;

      color: #33604a;
    }
  }
`;

export const ReasonForDonationContainer = styled.div`
  & input {
    width: 100%;

    background: rgba(65, 119, 92, 0.45);
    border: 2px solid rgba(51, 96, 74, 0.31);
    border-radius: 8px;

    padding: 10px 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    text-transform: capitalize;

    color: rgba(65, 119, 92, 0.96);
  }
`;

export const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  width: 100%;
  margin: 20px 0;

  & input {
    display: none;

    &:checked + label {
      background: rgba(65, 119, 92, 0.45);
    }
  }

  & label {
    width: 100%;
    display: inline-block;
    border: 2px solid rgba(65, 119, 92, 0.45);
    border-radius: 8px;

    padding: 8px 15px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #33604a;
  }
`;

export const DonationForm = styled.form`
  text-align: left;
  background: #fbfbfb;
  box-shadow: -0.5px -2px 4px 2px rgba(0, 0, 0, 0.2);

  width: 100%;
  max-width: 600px;
  padding: 10px 10px 20px;

  & h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;

    color: #6a6a6a;

    margin-bottom: 10px;
  }

  & hr {
    border: 1px solid #dfdfdf;
  }

  & button {
    width: 100%;

    padding: 10px 15px;

    text-transform: capitalize;
    margin: 10px 0 0;

    background: #41775c;
    border: 2px solid rgba(51, 96, 74, 0.31);
    border-radius: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #fcfffd;

    cursor: pointer;
  }

  @media (min-width: ${screens.desktop}) {
    border-radius: 20px;
  }
`;

export const TextContent = styled.div``;

export const Container = styled.section`
  background: #ffffff;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 100px ${globalPadding};
  @media (max-width: ${screens.mobile}) {
    padding: 100px 20px;
  }

  @media (min-width: ${screens.desktop}) {
    flex-direction: row;
    gap: 40px;
  }
`;
