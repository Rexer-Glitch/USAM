import {
  Container,
  Heading,
  Para,
  TextContent,
  DonationForm,
  DurationContainer,
  ReasonForDonationContainer,
  AmountSelectorContainer,
  ChooseAmountContainer,
} from "./styles/donate_styles";
function Donate() {
  return (
    <Container>
      <TextContent>
        <Heading>
          <span>S</span>upport Our Vision for Africa's Unity
        </Heading>
        <Para>
          Your financial support plays a vital role in driving our initiatives
          and creating lasting change. By making a donation, you contribute to
          the advancement of Africa's unity, empowerment, and transformation.
          Every contribution, no matter the size, helps us make a difference in
          the lives of Africans. Together, we can build a stronger and more
          prosperous Africa.
        </Para>
      </TextContent>
      <DonationForm>
        <h3>Donate</h3>
        <hr />
        <DurationContainer>
          <div>
            <input
              type="radio"
              id="oneTimer"
              key="oneTimer"
              name="duration"
              value="0"
            />
            <label htmlFor="oneTimer">One Timer</label>
          </div>
          <div>
            <input
              type="radio"
              id="monthly"
              key="monthly"
              name="duration"
              defaultChecked={true}
              value="1"
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div>
            <input
              type="radio"
              id="annually"
              key="annually"
              name="duration"
              value="2"
            />
            <label htmlFor="annually">Annually</label>
          </div>
        </DurationContainer>
        <ReasonForDonationContainer>
          <h3>Reason for donation</h3>
          <input type="text" placeholder="General donation" name="reason" />
        </ReasonForDonationContainer>
        <AmountSelectorContainer>
          <div>
            <input type="radio" id="fifty" name="amountSelector" />
            <label htmlFor="fifty">50</label>
          </div>
          <div>
            <input type="radio" id="hundred" name="amountSelector" />
            <label htmlFor="hundred">100</label>
          </div>
          <div>
            <input
              type="radio"
              id="oneFifty"
              name="amountSelector"
              defaultChecked={true}
            />
            <label htmlFor="oneFifty">150</label>
          </div>
          <div>
            <input type="radio" id="twoHun" name="amountSelector" />
            <label htmlFor="twoHun">200</label>
          </div>
          <div>
            <input type="radio" id="twoFifty" name="amountSelector" />
            <label htmlFor="twoFifty">250</label>
          </div>
        </AmountSelectorContainer>
        <ChooseAmountContainer>
          <h3>Choose an amount</h3>
          <input type="text" placeholder="Other amount" />
        </ChooseAmountContainer>

        <hr />
        <button>Support the movement</button>
      </DonationForm>
    </Container>
  );
}

export default Donate;
