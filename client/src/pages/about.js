import { Container, CTABtns, Btn } from "./styles/about_styles";
import { Nav } from "./styles/login_styles";

function About() {
  return (
    <>
      <Nav isDarkTheme={false} withShadow={false} />
      <Container>
        <h1>Unite, Empower, and Thrive: Join United States Of Africa</h1>
        <p>
          Welcome to <strong>USAM</strong>—the heartbeat of a movement that
          transcends borders, cultures, and backgrounds. We are more than an
          idea; we are a collective force dedicated to realizing the dream of a
          united and powerful Africa. One Africa envisions the creation of the
          United States of Africa, and we invite you to be an integral part of
          this historic journey.
        </p>

        <h3>Be a Member, Be a Changemaker</h3>
        <p>
          Unlock the full potential of your commitment by becoming a One Africa
          member. Membership is not just a status; it's an active pledge to the
          vision of a united continent. As a member, you gain exclusive access
          to:
          <ul>
            <li>
              <strong>Community Forums:</strong> Engage in meaningful
              discussions with like-minded individuals who share your passion
              for a united Africa.
            </li>
            <li>
              <strong>Events and Initiatives:</strong> Participate in exciting
              events, conferences, and projects that contribute to the
              realization of the United States of Africa.
            </li>
            <li>
              <strong>Exclusive Content:</strong> Stay informed and inspired
              with members-only updates, articles, and resources.
            </li>
          </ul>
        </p>

        <h3>Who Can Join?</h3>
        <p>
          <strong>USAM</strong> is a movement for all Africans and supporters of
          our vision worldwide. Whether you hail from the vibrant cities of
          Accra or Lagos, the historic landscapes of Cairo, or you're a
          supporter from across the globe, there's a place for you here. Our
          diversity is our strength, and together, we embody the spirit of
          unity.
        </p>

        <h3>Unity is Power</h3>
        <p>
          At the core of <strong>USAM</strong> is the belief that unity is
          power. By joining forces, we amplify our collective strength,
          resilience, and creativity. Together, we break down barriers, dispel
          divisions, and pave the way for a united Africa that stands tall on
          the global stage.
        </p>

        <h3>Founder's Call to Action</h3>

        <p>
          I founded <strong>USAM</strong> with a vision—a vision that extends
          beyond borders and embraces the power of unity. Join me and countless
          others who believe in the extraordinary potential of a united
          continent. Together, we can turn this vision into reality and shape a
          future where every African thrives.
        </p>

        <h3>Embrace the Power of USAM</h3>

        <p>
          Join <strong>USAM</strong> today and be part of a movement that
          transcends boundaries, embraces diversity, and envisions a future
          where the power of unity propels us forward.
        </p>

        <CTABtns>
          <Btn to="#">Get Involved</Btn>
          <Btn to="#">Learn More</Btn>
          <Btn to="#">Contact Us</Btn>
        </CTABtns>
      </Container>
    </>
  );
}

export default About;
