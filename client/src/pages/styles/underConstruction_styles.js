import { styled } from "styled-components";
import {motion} from "framer-motion";

export const Container = styled.main`
    background: #0E1817;
    color: white;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
`;

export const TextContainer = styled(motion.div)``;

export const Heading = styled(motion.h1)``;

export const Subheading = styled(motion.h3)``;

export const SocialContainer = styled(motion.div)`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

export const Icon = styled.img``;

export const Link = styled(motion.a)`
    cursor: pointer;
`;

