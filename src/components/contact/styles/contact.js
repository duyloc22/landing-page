import styled from "styled-components";

export const Container = styled.div`
    margin: 100px;
`;
export const Inner = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1``;
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
`;
