import styled from "styled-components";

export const Container = styled.div``;
export const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-flow: row-dense;
    grid-gap: 25px 50px;
    padding: 15px 25px 50px;
    margin: 0 auto 50px;
    max-width: 1500px;
`;
export const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    &:hover {
        transform: scale(1.03);
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 70%;
    border-radius: 5px 5px 0 0;
`;
export const Title = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 5px 0;
`;
export const Link = styled.a``;
export const Date = styled.p`
    color: gray;
    margin: 0;
    font-size: 0.8rem;
`;
export const Info = styled.div`
    padding: 0 20px 10px;
    display: flex;
    justify-content: space-between;
`;
export const Icon = styled.img`
    width: 30px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border-radius: 50%;
    }
`;
export const Div = styled.div``;
