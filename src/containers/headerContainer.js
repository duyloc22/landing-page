import { Header } from "../components";
import logo from "../assets/Logo.svg";
import * as ROUTES from "../constants/routes";

export function HeaderContainer() {
    return (
        <Header>
            <Header.Wrapper header>
                <Header.Logo src={logo} alt="logo" />
                <Header.Title>Loc Pham</Header.Title>
            </Header.Wrapper>
            <Header.Wrapper class="bavbar">
                <Header.Nav>
                    <Header.StyledLink exact activeClassName="any" to={ROUTES.HOME}>
                        Home
                    </Header.StyledLink>
                    <Header.StyledLink activeClassName="any" to={ROUTES.ABOUT}>
                        About
                    </Header.StyledLink>
                    <Header.StyledLink activeClassName="any" to={ROUTES.CONTACT}>
                        Contact
                    </Header.StyledLink>
                </Header.Nav>
                <Header.Hamburger />
            </Header.Wrapper>
        </Header>
    );
}
