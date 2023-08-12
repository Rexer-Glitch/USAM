import {
  Container,
  Image,
  AuthorDate,
  Title,
  Content,
  Button,
} from "./styles/post_styles";

import firstParagraph from "../../helper/firstParagraph";

function Post({ imageUrl, author, date, title, content, id }) {
  const clipText = (text) => {
    if (text === null) return "...";
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    }
    return text;
  };
  return (
    <Container>
      <Image src={imageUrl} alt={`${title} by ${author}`} loading="lazy" />
      <AuthorDate>
        {author} - {date}
      </AuthorDate>
      <Title>{title}</Title>
      <Content
        dangerouslySetInnerHTML={{ __html: clipText(firstParagraph(content)) }}
      />
      <Button to={`/dashboard/posts/${id}`}>Read More</Button>
    </Container>
  );
}

export default Post;
