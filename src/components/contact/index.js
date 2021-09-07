import { Container, Inner, Wrapper, Title, Img, Form, Input, Button } from "./styles/contact";

export default function Contact({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Contact.Wrapper = ({ children, ...restProps }) => {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Contact.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
};

Contact.Img = ({ src, ...restProps }) => {
    return <Img src={src} {...restProps} />;
};
Contact.Input = ({ ...restProps }) => {
    return <Input {...restProps} />;
};
Contact.Button = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>;
};
Contact.Form = ({ children, ...restProps }) => {
    return <Form {...restProps}>{children}</Form>;
};
