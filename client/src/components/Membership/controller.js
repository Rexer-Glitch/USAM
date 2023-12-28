import {Container, Link} from "./styles";

function Controller({link1, link2}){
    return <Container>
        {<Link to={link1 ? link1.to : "/membership"}>{link1 ? "← " + link1.name : ""}</Link>}
        {link2 && <Link to={link2.to}>{link2.name} 	&rarr;</Link>}
    </Container>
}

export default Controller;