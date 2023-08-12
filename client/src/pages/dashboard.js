import { Container } from "./styles/dashboard_styles";
import Navigation from "../components/Dashboard/nav";
import { DashboardContextProvider } from "../contexts/dashbboardContext";

function Dashboard({ content: Content }) {
  return (
    <Container>
      <DashboardContextProvider>
        <Navigation />
        <Content />
      </DashboardContextProvider>
    </Container>
  );
}

export default Dashboard;
