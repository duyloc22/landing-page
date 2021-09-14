import styled from "styled-components";

export const Container = styled.div`
    margin: 200px 0 0;

    @media (max-width: 768px) {
        margin-top: 100px;
    }
`;
export const Inner = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export const Wrapper = styled.div`
    max-width: 600px;
    width: 100%;
    text-align: center;
    padding: 2em;

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
export const Img = styled.img`
    width: 100%;
    height: 100%;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin: 15px 0;
    opacity: 0.6;
    max-width: 300px;
    width: 100%;

    &:focus {
        opacity: 1;
    }
`;
export const Button = styled.button`
    margin: 30px 0 0 0;
    padding: 10px 20px;
    background-color: #af9cda;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #886ad0;
    }
`;
