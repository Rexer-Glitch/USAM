import styled from "styled-components";
import textarea from "react-textarea-autosize";




//write comment styles

export const Owner = styled.div``;

export const WriteContainer = styled.div`
    clear: right;
`;

export const Avator = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: #272727;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;

  text-transform: capitalize;
`;

export const TextArea = styled(textarea)`
  width: 100%;
  font-size: 18px;
  outline: none;

  resize: none;
  border: 0;

  margin-top: 20px;
`;

export const Button = styled.button`
  

  padding: 15px 20px;
  margin-top: 20px;
  color: #fff;
  background-color: rgba(9, 32, 29, 0.81);

  font-size: 16px;

  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

//AuthorInformation styles

export const Date = styled.p`
  color: #272727;
`;

export const Details = styled.div``;

export const AuthorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 18px;

  & ${Avator} {
  }

  & ${Name} {
    font-weight: bold;
  }
`;

//comment component styles
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Option = styled.button`
  padding: 10px 15px;
  cursor: pointer;

  background: none;

  width: 100%;
  border: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HarmburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  & div {
    width: 4px;
    height: 4px;

    border-radius: 50%;

    background-color: #272727;
  }
`;

export const Options = styled.div`
position: relative;

  
`;

export const OptionsContainer = styled.div`
  position: absolute;

  top: 160%;
  right: 0;

  padding: 20px;

  background-color: white;

  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  & ${Option} + ${Option} {
    margin-top: 20px;
  }
`;

export const Body = styled.div`
    margin: 20px 0 10px;

    font-size: 18px;

`;

export const CommentContainer = styled.div`
    clear: right;
    margin-top: 20px;

`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;


  & ${Button} {
    display: flex;
    align-items: center;
   

    background: none;

    border: none;
    outline: none;


    color: #272727;

    font-size: 20px;

    gap: 5px;

    padding: 0;
  }

`;

export const CommentsContainer = styled.div`
        border-top: 1px solid rgba(0,0,0,0.2);
        padding: 50px 0 0 50px;
        margin-top: 15px;
    `;


//inner comment component styles
export const InnerCommentContainer = styled.div`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        height: 30px;
        width: 1.5px;
        background: grey;
        top: -30px;
        left: 20px;
    }

   & ${Footer} {
    margin-bottom: 30px;
   }


    & + div:last-child {
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
`;