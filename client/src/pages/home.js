import Footer from "../components/Common/footer";
import Header from "../components/Home/header";
import Intro from "../components/Home/intro";
import Membership from "../components/Home/membership";
import Explore from "../components/Home/explore";
import Donate from "../components/Home/donate";
import GetInvolved from "../components/Home/get_involved";
import { Container, Nav } from "./styles/home_styles";

function Home() {
  return (
    <Container>
      <Nav isDarkTheme={true} withShadow={false} />
      <Header />
      <Intro />
      <Membership />
      <Explore />
      <Donate />
      <GetInvolved />
      <Footer />
    </Container>
  );
}

export default Home;
