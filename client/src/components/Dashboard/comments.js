import {
  Container,
  Exit,
  Background,
  InnerContainer,
} from "./styles/comments_styles";
import {
  WriteContainer,
  AuthorInfo,
  Avator,
  Name,
  TextArea,
  AuthorInfoContainer,
  Details,
  Date,
  CommentContainer,
  InnerCommentContainer,
  Button,
  Header,
  Options,
  OptionsContainer,
  HarmburgerMenu,
  Option,
  Body,
  Icon,
  Footer,
  CommentsContainer,
  Owner
} from "./styles/comments_helper_styles";
import { useContext, useMemo, useState } from "react";
import likeIcon from "../../assets/like.png";
import likedIcon from "../../assets/like-dark.png";
import commentIcon from "../../assets/comment.png";
import styled from "styled-components";
import { ArticleContext } from "../../contexts/articleContext";
import { AuthContext } from "../../contexts/authContext";

function WriteComment({ isMain, article_id, comment_id, hideWriter, ...rest }) {
  const { addComment, addCommentToComment } = useContext(ArticleContext);
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");

  const postComment = async () => {
    if (content.length > 2) {
      const comment = {
        content,
        author: user._id,
      };
      if (isMain) {
        const resp = await addComment(article_id, comment);
        if (resp && resp._id) {
          setContent("");
        }
      } else {
        const resp = await addCommentToComment(article_id, comment_id, comment);
        if (resp && resp._id) {
          setContent("");
          hideWriter();
        }
      }
    }
  };

  return (
    <WriteContainer {...rest}>
      <AuthorInfo>
        <Avator></Avator>
        <Name>{user.username}</Name>
      </AuthorInfo>
      <TextArea
        placeholder="Leave a comment"
        onChange={({ target }) => setContent(target.value)}
        value={content}
      />
      <Button onClick={postComment}>Comment</Button>
    </WriteContainer>
  );
}

function AuthorInformation({ name, postDate, owner }) {
  return (
    <AuthorInfoContainer>
      <Avator></Avator>
      <Details>
        <div><Name>{name}</Name>{owner && <Owner>Author</Owner>}</div>
        <Date>{postDate}</Date>
      </Details>
    </AuthorInfoContainer>
  );
}

function InnerComment({
  author_name,
  author_date,
  content,
  like_count,
  setShowWriteReply,
  owner
}) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <InnerCommentContainer>
      <Header>
        <AuthorInformation name={author_name} postDate={author_date} owner={owner} />
        <Options>
          <HarmburgerMenu onClick={() => setShowOptions(!showOptions)}>
            <div></div>
            <div></div>
            <div></div>
          </HarmburgerMenu>
          {showOptions && (
            <OptionsContainer>
              {owner ? <><Option>Edit</Option>
              <Option>Delete</Option></> : <Option>Report this</Option>}
              
            </OptionsContainer>
          )}
        </Options>
      </Header>
      <Body>{content}</Body>
      <Footer>
        <Button>
          <Icon src={likeIcon} alt="like icon" />
          {like_count}
        </Button>
        <Button onClick={() => setShowWriteReply(true)}>Reply</Button>
      </Footer>
    </InnerCommentContainer>
  );
}

function Comment({
  article_id,
  comment_id,
  author_id,
  author_name,
  author_date,
  content,
  like_count,
  likedBy,
  comments,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [showWriteReply, setShowWriteReply] = useState(false);
  const { likeComment } = useContext(ArticleContext);
  const { user } = useContext(AuthContext);

  const like = async () => {
    const resp = await likeComment(article_id, comment_id);
    console.log(resp);
  };

  const alreadyLiked = useMemo(() => {
    return user && likedBy && likedBy.includes(user._id);
  }, [user, likedBy]);

  return (
    <CommentContainer>
      <Header>
        <AuthorInformation name={author_name} postDate={author_date} />
        <Options>
          <HarmburgerMenu onClick={() => setShowOptions(!showOptions)}>
            <div></div>
            <div></div>
            <div></div>
          </HarmburgerMenu>
          {showOptions && (
            <OptionsContainer>
              {author_id === user._id ? (
                <>
                  <Option>Edit</Option>
                  <Option>Delete</Option>
                </>
              ) : (
                <Option>Report this</Option>
              )}
            </OptionsContainer>
          )}
        </Options>
      </Header>
      <Body>{content}</Body>
      <Footer>
        <Button onClick={like}>
          <Icon src={alreadyLiked ? likedIcon : likeIcon} alt="like icon" />
          {like_count}
        </Button>
        <Button>
          <Icon src={commentIcon} alt="comment icon" />
          {comments ? comments.length : ""}
        </Button>
        <Button onClick={() => setShowWriteReply(!showWriteReply)}>
          Reply
        </Button>
      </Footer>
      {comments && (
        <CommentsContainer>
          {comments &&
            comments.map(({ author, date, content, like_count, likedBy }) => (
              <InnerComment
                author_name={author.username}
                author_date={date}
                content={content}
                like_count={like_count}
                likedBy={likedBy}
                setShowWriteReply={setShowWriteReply}
                owner={author._id === user._id}
              />
            ))}
        </CommentsContainer>
      )}

      {showWriteReply && (
        <WriteComment
          name={author_name}
          article_id={article_id}
          comment_id={comment_id}
          isMain={false}
          hideWriter={() => setShowWriteReply(false)}
        />
      )}
    </CommentContainer>
  );
}

const MainWriter = styled(WriteComment)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;

  & button {
    padding: 10px 15px;
  }

  & textarea {
    min-height: 50px;
  }
`;

function Comments({ article_id, comments, exit }) {
  return (
    <Container>
      <Background />
      <InnerContainer>
        <Exit onClick={exit} />
        <MainWriter
          name={"Raymac Antony Gumbo"}
          article_id={article_id}
          isMain={true}
        />
        {comments &&
          comments.map(
            ({
              _id,
              date,
              author,
              content,
              comments: comm,
              likes,
              likedBy,
            }) => (
              <Comment
                article_id={article_id}
                comment_id={_id}
                author_name={author.username}
                author_date={date}
                author_id={author._id}
                content={content}
                like_count={likes === 0 ? "" : likes}
                likedBy={likedBy}
                comments={comm}
              />
            )
          )}
      </InnerContainer>
    </Container>
  );
}

export default Comments;
