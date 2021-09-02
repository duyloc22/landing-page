import { Header, Hero } from "../components";
import logo from "../assets/Logo.svg";
import * as ROUTES from "../constants/routes";

export function HeaderContainer() {
    return (
        <>
            <Header>
                <Header.Wrapper>
                    <Header.Logo src={logo} alt="logo" />
                    <Header.Title>Loc Pham</Header.Title>
                </Header.Wrapper>
                <Header.Nav>
                    <Header.StyledLink exact activeClassName="any" to={ROUTES.HOME}>
                        Home
                    </Header.StyledLink>
                    <Header.StyledLink activeClassName="any" to={ROUTES.ABOUT}>
                        About
                    </Header.StyledLink>
                </Header.Nav>
            </Header>
            <Hero>
                <Hero.Bg />
                <Hero.Bg delay={4} direction={"alternate-reverse"} />
                <Hero.Bg delay={5} />
                <Hero.Wrapper>
                    <Hero.Content>Hello</Hero.Content>
                </Hero.Wrapper>
            </Hero>
        </>
    );
}
