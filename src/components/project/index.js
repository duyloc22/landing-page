import { Container, Inner, Wrapper, Img, Title, Link, Date } from "./styles/project";

export default function Project({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Project.Container = function ProjectContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};
Project.Img = function ProjectImg({ src, alt, ...restProps }) {
    return <Img src={src} alt={alt} {...restProps} />;
};

Project.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
};
Project.Link = ({ href, children, ...restProps }) => {
    return (
        <Link href={href} {...restProps}>
            {children}
        </Link>
    );
};
Project.Date = ({ children, ...restProps }) => {
    return <Date {...restProps}>{children}</Date>;
};
