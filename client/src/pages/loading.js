import {Container,InnerContainer, Bar, Circle, Logo} from "./styles/loading_styles.js";
import LogoImage from "../assets/logo_Light.png";

function Loading(){
    return <Container>
        <InnerContainer>
        <Bar>
        <Circle>
        </Circle>
        </Bar>
        
        </InnerContainer>
        <Logo> <img src={LogoImage} alt="logo"/></Logo>
    </Container>
}

export default Loading;