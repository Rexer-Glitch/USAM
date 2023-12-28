import { Container } from "./styles/content_styles";
import Topbar from "./topbar";
import WriteArticle from "./writeArticle";
import ViewArticle from "./viewArticle";
import NewsFeed from "./newsFeed";

function Content({ page = "main" }) {
  return (
    <Container>
      <Topbar />
      {page === "main" && <WriteArticle />}
      {page === "post" && <ViewArticle />}
      <NewsFeed />
    </Container>
  );
}

export default Content;
