import {
  Container,
  ArticleContainer,
  Title,
  CoverUserDateContainer,
  Image,
  UserDateContainer,
  UserContainer,
  User,
  UserBubble,
  DateContainer,
  Content,
} from "./styles/viewArticle_styles";
import { useParams } from "react-router-dom";
import { ArticleContext } from "../../contexts/articleContext";
import { useContext, useState, useEffect } from "react";
import Topbar from "./topbar";

function ViewArticle() {
  const { postID } = useParams();

  const { getArticleFromDB } = useContext(ArticleContext);
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleFromDB(postID).then((result) => {
      if (result && result.message) {
        //notify user
        return;
      }
      setArticle(result);
    });
  }, [getArticleFromDB, setArticle, postID]);

  return (
    <Container>
      <Topbar />
      {article && article.title && (
        <ArticleContainer>
          <Title>{article.title}</Title>
          <CoverUserDateContainer>
            <Image
              src={article.coverUrl}
              alt={`${article.title} - blog cover`}
            />
            <UserDateContainer>
              <UserContainer>
                <p>Written by</p>
                <User>
                  <UserBubble>{article.author.username[0]}</UserBubble>
                  {article.author.username}
                </User>
              </UserContainer>
              <DateContainer>
                <p>Published on</p>
                {article.date}
              </DateContainer>
            </UserDateContainer>
          </CoverUserDateContainer>
          <Content dangerouslySetInnerHTML={{ __html: article.content }} />
        </ArticleContainer>
      )}
    </Container>
  );
}

export default ViewArticle;
