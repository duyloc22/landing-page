import styled from "styled-components";

export const Container = styled.div`
    margin: 200px 0 0;
`;
export const Inner = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export const Wrapper = styled.div`
    max-width: 600px;
    width: 100%;
    text-align: center;

    @media (max-width: 1000px) {
        ${({ svg }) => svg && "display:none"}
    }
`;

export const Title = styled.h1`
    color: #f26363;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
export const Text = styled.p``;
export const Img = styled.img`
    width: 100%;
    height: 100%;
`;
