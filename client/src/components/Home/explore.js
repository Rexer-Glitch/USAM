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

import ArticlesData from "../../helper/articlesData";

function Article({
  isHorizontal,
  image,
  user: { profile, name },
  date,
  title,
  content,
  link,
}) {
  return (
    <ArticleContainer isHorizontal={isHorizontal}>
      <ArticleImage src={image} alt={title} />
      <ArticleContent>
        <UserDateContainer>
          <UserProfile src={profile} alt={`${name} profile`} />{" "}
          <UserDate>
            {name} - {date}
          </UserDate>
        </UserDateContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText>{content}</ArticleText>
        <ReadMoreBtn to={link}>Read More</ReadMoreBtn>
      </ArticleContent>
    </ArticleContainer>
  );
}

function Explore() {
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
        {ArticlesData &&
          ArticlesData.map(
            ({ image, user, date, title, content, link }, index) => {
              if (index === 0)
                return (
                  <Article
                    image={image}
                    isHorizontal={true}
                    user={user}
                    date={date}
                    title={title}
                    content={content}
                    link={link}
                  />
                );
              return <></>;
            }
          )}
        <SideArticlesContainer>
          {ArticlesData &&
            ArticlesData.map(
              ({ image, user, date, title, content, link }, index) => {
                if (index !== 0)
                  return (
                    <Article
                      image={image}
                      isHorizontal={false}
                      user={user}
                      date={date}
                      title={title}
                      content={content}
                      link={link}
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
