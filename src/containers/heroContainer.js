import { Hero } from "../components";

export function HeroContainer() {
    return (
        <Hero>
            <Hero.Bg />
            <Hero.Bg delay={4} direction={"alternate-reverse"} />
            <Hero.Bg delay={5} />
            <Hero.Wrapper>
                <Hero.Content>duyloc.dev</Hero.Content>
            </Hero.Wrapper>
        </Hero>
    );
}
