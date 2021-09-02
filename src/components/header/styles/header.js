import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;
export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`;
export const Nav = styled.div`
    display: flex;
    align-items: center;
`;
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    margin: 0 5px;
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
