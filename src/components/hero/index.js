import { Container, Inner, Bg, Wrapper, Content } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children} </Inner>
        </Container>
    );
}

Hero.Bg = function HeroBg({ ...restProps }) {
    return <Bg {...restProps} />;
};

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};
Hero.Content = function HeroContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>;
};
