import {Container, Cards, Card, Icon, Title, Subtitle, Button} from "./styles/membership_styles";
import Mic from "../../assets/Microphone.png";
import Key from "../../assets/Key.png";
import HandShake from "../../assets/Handshake.png";


function Membership(){
    return <Container>
            <h1><span>B</span>ecome a Member and make a difference</h1>
            <p>Join us to shape a united and prosperous Africa. Gain access to exclusive benefits that empower you to drive change, amplify your voice, and collaborate with like-minded individuals.</p>

            <Cards>
                <Card>
                    <Icon src={Mic} alt="mic icon"/>
                    <Title>Amplify Your Voice</Title>
                    <Subtitle>Raise your voice for Africa's future. Join a vibrant community of like-minded individuals, sharing ideas, and driving change.</Subtitle>
                </Card>
                <Card>
                    <Icon src={Key} alt="keys icon"/>
                    <Title>Exclusive Resources</Title>
                    <Subtitle>Access valuable resources, stay informed, and empower yourself with the latest insights and best practices.</Subtitle>
                </Card>
                <Card>
                    <Icon src={HandShake} alt="hand shake icon"/>
                    <Title>Networking</Title>
                    <Subtitle>Connect with passionate individuals, forge meaningful partnerships, and collaborate to create lasting impact.</Subtitle>
                </Card>
            </Cards>

            <Button to={"/membership"}>Learn more</Button>
        </Container>
}

export default Membership;