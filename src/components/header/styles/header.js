import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: auto;
    background-color: white;
`;
export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`;
export const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-right: 100px;

    @media (max-width: 769px) {
        position: relative;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        right: 0.5em;
        font-size: 3rem;
        display: ${({ activeNav }) => (activeNav ? "flex" : "none")};
    }
    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 20px;
    &.${(props) => props.activeClassName} {
        background-color: #f1f1fd;
        font-weight: 600;
    }

    @media (max-width: 769px) {
        margin-bottom: 1em;
    }
`;

export const Logo = styled.img`
    width: 30px;
`;
export const Title = styled.h3``;
export const Button = styled.button``;
export const Wrapper = styled.div`
    display: flex;

    @media (max-width: 769px) {
        ${({ header }) => header && "position: absolute;"}
    }
`;
export const Hamburger = styled.div`
    width: 30px;
    height: 5px;
    position: absolute;
    right: 20px;
    background: black;
    top: 20px;
    cursor: pointer;

    &:after {
        margin-top: 3px;
    }
    &:before {
        margin-top: 8px;
    }
    &:before,
    &:after {
        content: "";
        display: block;
        width: inherit;
        height: inherit;
        background-color: inherit;
    }
    @media (min-width: 770px) {
        display: none;
    }
`;
