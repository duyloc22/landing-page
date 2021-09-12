import { Container, Wrapper, Inner, Title, Text, Img } from "./styles/about";

export default function About({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

About.Wrapper = ({ children, ...restProps }) => {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

About.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
};

About.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>;
};

About.Img = ({ src, ...restProps }) => {
    return <Img src={src} {...restProps} />;
};
