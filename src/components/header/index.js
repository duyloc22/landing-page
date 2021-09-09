import { Container, Inner, Nav, StyledLink, Logo, Title, Button, Wrapper, Hamburger } from "./styles/header";

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Header.Logo = function HeaderLogo({ src, alt, ...restProps }) {
    return <Logo src={src} alt={alt} {...restProps} />;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children} </Title>;
};
Header.Nav = function HeaderNav({ children, ...restProps }) {
    return <Nav {...restProps}>{children} </Nav>;
};
Header.StyledLink = function HeaderStyledLink({ children, ...restProps }) {
    return <StyledLink {...restProps}>{children} </StyledLink>;
};
Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children} </Button>;
};
Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children} </Wrapper>;
};
Header.Hamburger = function HeaderHamburger({ children, ...restProps }) {
    return <Hamburger {...restProps}>{children} </Hamburger>;
};
