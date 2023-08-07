import { Container } from "./styles/dashboard_styles";
import Navigation from "../components/Dashboard/nav";
import Content from "../components/Dashboard/content";

function Dashboard() {
  return (
    <Container>
      <Navigation />
      <Content />
    </Container>
  );
}

export default Dashboard;
