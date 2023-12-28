import styled from "styled-components";


export const Main = styled.main`
    flex: 4;
`;

export const Side = styled.aside`
    flex: 1;

    padding-top: 10px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

`;

export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        & ${Side} {
            display: none;
        }
    }
    
`;
