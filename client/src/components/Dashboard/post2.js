import {
  Container,
  Title,
  AuthorInfo,
  Avatar,
  Details,
  Name,
  CreatedOn,
  PostContent,
  Text,
  Body,
  Cover,
  Responses,
  DiscussBtn,
  LikeBtn,
  Reads,
} from "./styles/post2_styles";

import firstParagraph from "../../helper/firstParagraph";

function Post({ imageUrl, author, date, title, content, likes, reads, id }) {
  const clipText = (text) => {
    if (text === null) return "...";
    if (text.length > 150) {
      return text.substring(0, 150) + "...";
    }
    return text;
  };
  return (
    <Container>
      <AuthorInfo>
        <Avatar></Avatar>
        <Details>
          <Name>{author}</Name>
          <CreatedOn>{date}</CreatedOn>
        </Details>
      </AuthorInfo>
      <PostContent to={`/dashboard/posts/${id}`}>
        <Text>
          <Title>{title}</Title>
          <Body
            dangerouslySetInnerHTML={{
              __html: clipText(firstParagraph(content)),
            }}
          />
        </Text>
        <Cover src={imageUrl} alt={`${title} by ${author}`} loading="lazy" />
      </PostContent>

      <Responses>
        <DiscussBtn>Discuss</DiscussBtn> | <LikeBtn>{likes} Likes</LikeBtn> | <Reads>{reads} Reads</Reads>
      </Responses>
    </Container>
  );
}

export default Post;
