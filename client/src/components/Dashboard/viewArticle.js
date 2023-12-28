
import {
  Container,
  ArticleContainer,
  Title,
  CoverContainer,
  AuthorInfo,
  Avatar,
  Name,
  Date,
  Image,
  Content,
} from "./styles/viewArticle_styles";
import { useParams } from "react-router-dom";
import { ArticleContext } from "../../contexts/articleContext";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useState, useEffect, useMemo } from "react";
import Topbar from "./topbar";
import PostControllers from "./postResponseControllers";
import Comments from "./comments";

function ViewArticle() {
  const { postID } = useParams();

  const { user } = useContext(AuthContext);
  const { articles } = useContext(ArticleContext);
  const [article, setArticle] = useState({});
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const currentArticle = articles.find((a)=> a._id === postID);
    if(!currentArticle)return;

    setArticle(currentArticle);
    console.log(currentArticle);
  }, [articles, setArticle, postID]);

  const alreadyLiked = useMemo(() => {
    return user && article.likedBy && article.likedBy.includes(user._id);
  }, [user, article]);

  return (
    <Container>
      <Topbar />
      {article && article.title && (
        <ArticleContainer>
          <CoverContainer>
            <Image
              src={article.coverUrl}
              alt={`${article.title} - blog cover`}
            />
          </CoverContainer>
          <Title>{article.title}</Title>
          <AuthorInfo>
            <Avatar></Avatar>
            <Name>{article.author.username}</Name> | <Date>{article.date}</Date>
          </AuthorInfo>
          <Content dangerouslySetInnerHTML={{ __html: article.content }} />
        </ArticleContainer>
      )}

      <PostControllers
        id={article._id}
        isLiked={alreadyLiked}
        like_counter={article.likes ? article.likes : ""}
        comment_counter={
          article.comments && article.comments.length > 0
            ? article.comments.length
            : ""
        }
        showComments={()=> setShowComments(true)}
      />

      {showComments && <Comments article_id={article._id} comments={article.comments} exit={()=> setShowComments(false)}/>}
    </Container>
  );
}

export default ViewArticle;
