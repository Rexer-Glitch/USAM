import {
  Container,
  Heading,
  Para,
  Articles,
  SideArticlesContainer,
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  UserDateContainer,
  UserProfile,
  UserDate,
  ArticleTitle,
  ArticleText,
  ReadMoreBtn,
} from "./styles/explore_styles";

import { ArticleContext } from "../../contexts/articleContext";

import firstParagraph from "../../helper/firstParagraph";

import { useContext, useEffect, useMemo } from "react";

function Article({
  isHorizontal,
  image,
  user: { profile, username },
  date,
  title,
  content,
  link,
}) {
  const formatContent = (text) => {
    text = firstParagraph(text);
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
    return text;
  };
  return (
    <ArticleContainer isHorizontal={isHorizontal}>
      <ArticleImage src={image} alt={title} />
      <ArticleContent>
        <UserDateContainer>
          <UserProfile src={profile} alt={`${username} profile`} />{" "}
          <UserDate>
            {username} - {date}
          </UserDate>
        </UserDateContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText>{formatContent(content)}</ArticleText>
        <ReadMoreBtn to={link}>Read More</ReadMoreBtn>
      </ArticleContent>
    </ArticleContainer>
  );
}

function Explore() {
  const { articles, getArticles } = useContext(ArticleContext);

  useEffect(() => {
    getArticles();
  }, []);

  const getTopThree = useMemo(() => {
    if (!articles) return [];
   
    if(articles.message === "Server error") return [];

    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return sortedArticles.slice(0, 3);
  }, [articles]);

  return (
    <Container>
      <Heading>
        <span>E</span>xplore Insights and Stories
      </Heading>
      <Para>
        Stay informed and inspired through our blog, where we share insightful
        articles, inspiring stories, and thought-provoking perspectives on
        Africa's progress.
      </Para>
      <Articles>
        {getTopThree &&
          getTopThree.map(
            ({ coverUrl, author, date, title, content, _id }, index) => {
              if (index === 0)
                return (
                  <Article
                    image={coverUrl}
                    isHorizontal={true}
                    user={author}
                    date={date}
                    title={title}
                    content={content}
                    link={`/dashboard/posts/${_id}`}
                  />
                );
              return <></>;
            }
          )}
        <SideArticlesContainer>
          {getTopThree &&
            getTopThree.map(
              ({ coverUrl, author, date, title, content, _id }, index) => {
                if (index !== 0)
                  return (
                    <Article
                      image={coverUrl}
                      isHorizontal={false}
                      user={author}
                      date={date}
                      title={title}
                      content={content}
                      link={`/dashboard/posts/${_id}`}
                    />
                  );
                return <></>;
              }
            )}
        </SideArticlesContainer>
      </Articles>
    </Container>
  );
}

export default Explore;
