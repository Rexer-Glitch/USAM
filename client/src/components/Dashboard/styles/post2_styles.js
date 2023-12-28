import styled from "styled-components";
import {Link} from "react-router-dom";

export const Reads = styled.button``;

export const LikeBtn = styled.button``;

export const DiscussBtn = styled.button`
 
`;

export const Responses = styled.div`
    margin-top: 20px;
    & button {
        background: none;
        border: none;
        outline: none;

        font-size: 18px;

        cursor: pointer;

        margin: 0 10px;
    }

    & ${DiscussBtn} {
        margin-left: 0;
    }

`;

export const Cover = styled.img`
    width: 100%;
    height: 200px;
    background-size: cover;

    border-radius: 10px;

    width: 200px;
    height: 150px;

    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #272727;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Body = styled.p``;

export const Title = styled.h2`
    font-size: 22px;
`;

export const Text = styled.div`
    font-size: 20px;
    color: #292929;
`;

export const PostContent = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    text-decoration: none;
`;

export const CreatedOn = styled.p``;

export const Name = styled.p`
    font-weight: 500;
    text-transform: capitalize;
`;

export const Details = styled.div`

    color: #292929;
`;

export const Avatar = styled.div`
    width: 45px;
    height: 45px;

    background-color: #272727;

    border-radius: 50%;
`;

export const AuthorInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    margin-bottom: 10px;
`;

export const Container = styled.div`
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;

    width: 100%;
    max-width: 60%;

    @media (max-width: 1200px) {
        max-width: 100%;
    }
`;


