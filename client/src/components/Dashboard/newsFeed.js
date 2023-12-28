import { Container, Main, Side} from "./styles/newsFeed_styles";
import Events, { eventData } from "./events";
import Posts from "./posts"

function NewsFeed() {
  return (
    <Container>
      <Main>
        <Posts />
      </Main>
      <Side>
        <Events events={eventData}/>
      </Side>
    </Container>
  );
}

export default NewsFeed;
