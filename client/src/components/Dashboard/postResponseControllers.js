import { useContext } from "react";
import {Container, Button, Icon} from "./styles/postControllers_styles";
import likeIcon from "../../assets/like.png";
import likedIcon from "../../assets/like-dark.png"
import commentIcon from "../../assets/comment.png";
import shareIcon from "../../assets/share.png";
import { ArticleContext } from "../../contexts/articleContext";

function Controllers({id, isLiked, like_counter, comment_counter, showComments}){
  const { likeArticle} = useContext(ArticleContext);

    const like = ()=> {
        likeArticle(id);
    }

    return <Container>
        <Button onClick={like}>
            <Icon  src={isLiked ? likedIcon : likeIcon} alt="like icon" />
            {like_counter}
        </Button>
        <Button onClick={showComments}>
            <Icon src={commentIcon} alt="comment icon" />
            {comment_counter}
        </Button>
        <Button>
            <Icon src={shareIcon} alt="share icon" />
        </Button>
    </Container>
}

export default Controllers;