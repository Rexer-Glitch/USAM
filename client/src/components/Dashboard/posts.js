import { useContext, useEffect, useState } from "react";
import {
  Container,
  OptionsContainer,
  FilterButtonContainer,
  Button,
  Options,
  PostsContainer,
} from "./styles/posts_styles";
import Post from "./post";
import { ArticleContext } from "../../contexts/articleContext";
function Posts() {
  const { articles, getArticles } = useContext(ArticleContext);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recent");

  const setOption = (option) => {
    setSelectedOption(option);
    setShowOrderOptions(false);
  };

  useEffect(() => {
    if (articles.length === 0) {
      getArticles();
    }
  }, [articles, getArticles]);
  return (
    <Container>
      <OptionsContainer>
        <FilterButtonContainer>
          <Button onClick={() => setShowOrderOptions(!showOrderOptions)}>
            {selectedOption}
          </Button>
          {showOrderOptions && (
            <Options>
              <Button onClick={() => setOption("Popular")}>Popular</Button>
              <Button onClick={() => setOption("Recent")}>Recent</Button>
              <Button onClick={() => setOption("Following")}>Following</Button>
            </Options>
          )}
        </FilterButtonContainer>
      </OptionsContainer>
      <PostsContainer>
        {articles &&
          articles.map(({ title, content, date, author, coverUrl, _id }) => (
            <Post
              key={_id}
              title={title}
              content={content}
              date={date}
              author={author.username}
              imageUrl={coverUrl}
              id={_id}
            />
          ))}
      </PostsContainer>
    </Container>
  );
}

export default Posts;
