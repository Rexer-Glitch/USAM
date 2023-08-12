import { useState, useRef, useEffect, useContext } from "react";
import {
  Container,
  UserBubble,
  Cards,
  Card,
  CardHeader,
  Textbox,
  Button,
  Toolbar,
  Title,
  Publish,
  Icon,
  EditorContainer,
  BackFade,
  EditorWindow,
  AreYouSure,
} from "./styles/writeArticle_styles";
import modules from "../../helper/editorTools";

import { ArticleContext } from "../../contexts/articleContext";

import { AuthContext } from "../../contexts/authContext";

import publish from "../../assets/publish.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import isValidUrl from "../../helper/isValidUrl";

function WriteArticle() {
  const { postArticle } = useContext(ArticleContext);
  const { user } = useContext(AuthContext);

  const [reviewEditor, setReviewEditor] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);
  const [content, setContent] = useState();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cardOrder, setCardOrder] = useState({
    isShowTitle: true,
    isShowCover: false,
    isShowEditor: false,
  });

  const titleTbx = useRef(null);
  const coverTbx = useRef(null);

  const showCover = () => {
    if (title.length < 3) {
      //notify user on invalid title
      titleTbx.current.style.borderColor = "rgba(227, 11, 92, 0.5)";
      titleTbx.current.style.outlineColor = "rgba(227, 11, 92, 0.5)";
      return;
    }
    setCardOrder({
      isShowTitle: false,
      isShowCover: true,
      isShowEditor: false,
    });
  };

  const showEditor = () => {
    if (!isValidUrl(imageUrl)) {
      //notify user on invalid title
      coverTbx.current.style.borderColor = "rgba(227, 11, 92, 0.5)";
      coverTbx.current.style.outlineColor = "rgba(227, 11, 92, 0.5)";
      return;
    }

    setCardOrder({
      isShowTitle: false,
      isShowCover: false,
      isShowEditor: true,
    });
  };

  const OpenEditor = () => {
    setReviewEditor(true);
    setAreYouSure(false);
    setCardOrder({
      isShowTitle: true,
      isShowCover: false,
      isShowEditor: false,
    });

    setTitle("");
    setImageUrl("");
    setContent("");
  };

  const publishArticle = async () => {
    if (content.trim() === "") return;

    const article = {
      title,
      coverUrl: imageUrl,
      content,
    };
    const result = await postArticle(article);
    if (result === false) {
      toast.error("Error, publishing, try later", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
      });
      return;
    }
    setReviewEditor(false);
  };

  useEffect(() => {
    if (title.length > 3) {
      titleTbx.current.style.borderColor = "rgba(0, 0, 0, 0.2)";
      titleTbx.current.style.outlineColor = "rgba(0, 0, 0, 0.8)";
    }
  }, [title]);

  useEffect(() => {
    if (isValidUrl(imageUrl)) {
      coverTbx.current.style.borderColor = "rgba(0, 0, 0, 0.2)";
      coverTbx.current.style.outlineColor = "rgba(0, 0, 0, 0.8)";
    }
  }, [imageUrl]);

  return (
    <>
      <Container onClick={() => OpenEditor(true)}>
        <UserBubble>{user && user.username[0]}</UserBubble> In the mood to
        write?
      </Container>
      {reviewEditor && (
        <EditorContainer>
          <BackFade onClick={() => setAreYouSure(true)}></BackFade>
          {areYouSure && (
            <AreYouSure>
              <p>Are you sure you want to leave?</p>
              <div>
                <button onClick={() => setAreYouSure(false)}>Cancel</button>
                <button onClick={() => setReviewEditor(false)}>
                  Yes, Discard
                </button>
              </div>
            </AreYouSure>
          )}
          <EditorWindow>
            <Toolbar>
              <Title>{title === "" ? "Untitled" : title}</Title>
              <Publish onClick={publishArticle}>
                <Icon src={publish} alt="publish icon" />
                Publish
              </Publish>
            </Toolbar>
            <Cards>
              {cardOrder.isShowTitle && (
                <Card>
                  <CardHeader>Enter Article title</CardHeader>
                  <Textbox
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                    ref={titleTbx}
                  />
                  <Button onClick={showCover}>Next</Button>
                </Card>
              )}
              {cardOrder.isShowCover && (
                <Card>
                  <CardHeader>Add Cover</CardHeader>
                  <Textbox
                    type="text"
                    placeholder="Url"
                    value={imageUrl}
                    onChange={({ target }) => setImageUrl(target.value)}
                    ref={coverTbx}
                  />
                  <Button onClick={showEditor}>Next</Button>
                </Card>
              )}
              {cardOrder.isShowEditor && (
                <Card style={{ display: "block", height: "100%" }}>
                  <CardHeader>Let's write</CardHeader>
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={modules}
                  />
                </Card>
              )}
            </Cards>
          </EditorWindow>
        </EditorContainer>
      )}
      <ToastContainer />
    </>
  );
}

export default WriteArticle;
