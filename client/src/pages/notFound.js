import {Container, Heading} from "./styles/notFound_styles";
import Navigation from "../components/Common/nav";

function NotFound(){
    return <Container>
        <Navigation />
        <Heading>Ops..Are you lost?</Heading>
    </Container>
}

export default NotFound;