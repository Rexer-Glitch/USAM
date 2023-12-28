import styled from "styled-components";


export const Icon = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 10px;

    cursor: pointer;

    border: ${props=> props.isLiked === true? "1px solid black" : ""}

`;

export const Button = styled.button`
    border: none;
    outline: none;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
`;

export const Container = styled.div`
    background: #fff;
    color: black;

    border-radius: 10px;

    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 1px 2px 10px rgba(0,0,0,0.1);
    padding: 15px 50px;

    position: fixed;
    bottom: 20px;
    left: 50%;

    transform: translate(-50%, 0);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

`;
