import {
  Container,
  Heading,
  Para,
  Content,
  Button,
} from "./styles/getInvolved_styles";
import photo1 from "../../assets/airballoon.png";
import photo2 from "../../assets/ballboy.png";
import photo3 from "../../assets/safari.png";
import photo4 from "../../assets/vallage girls.png";

function GetInvolved() {
  return (
    <Container>
      <Heading>
        <span>G</span>et Involved and Take Action
      </Heading>
      <Content>
        <Para>
          There are numerous ways to get involved with the United States of
          Africa. <br />
          <br />
          Whether you're interested in volunteering your time and skills,
          participating in events, or advocating for our cause, we welcome your
          contribution. <br />
          <br />
          Join our community of passionate individuals and actively engage in
          shaping Africa's future.
        </Para>
        <div>
          <img src={photo1} alt="air balloon in africa" />
          <img src={photo2} alt="boy with ball in africa" />
          <img src={photo3} alt="safari in africa" />
          <img src={photo4} alt="village girls in africa" />
        </div>
      </Content>

      <Button to="/get_involved">Explore Opportunities to Get Involved</Button>
    </Container>
  );
}

export default GetInvolved;
