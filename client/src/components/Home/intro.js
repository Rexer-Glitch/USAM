import { Container, Content } from "./styles/intro_styles";
import ImageUrl from "../../assets/united_africa.png";

function Intro() {
  return (
    <Container>
      <h1>
        <span>J</span>oin the Movement for a United Africa
      </h1>
      <Content>
        <p>
          <span>At</span> the United States of Africa, we believe in the power
          of unity, empowerment, and transformation. <br />
          <br />
          Our grassroots initiative is dedicated to fostering a stronger and
          more prosperous Africa, where borders dissolve, cultures thrive, and
          collaboration leads to unparalleled progress. <br />
          <br />
          Join us on this transformative journey as we shape the destiny of
          Africa together.
        </p>
        <img src={ImageUrl} alt="United africa" />
      </Content>
    </Container>
  );
}

export default Intro;
