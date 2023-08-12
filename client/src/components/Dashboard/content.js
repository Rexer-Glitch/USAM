import { Container } from "./styles/content_styles";
import Topbar from "./topbar";
import Posts from "./posts";
import WriteArticle from "./writeArticle";
import ViewArticle from "./viewArticle";

function Content({ page = "main" }) {
  return (
    <Container>
      <Topbar />
      {page === "main" && <WriteArticle />}
      {page === "post" && <ViewArticle />}
      <Posts />
    </Container>
  );
}

export default Content;
