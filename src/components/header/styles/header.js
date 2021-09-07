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
`;

export const Logo = styled.img`
    width: 30px;
`;
export const Title = styled.h3``;
export const Button = styled.button``;
export const Wrapper = styled.div`
    display: flex;
`;
