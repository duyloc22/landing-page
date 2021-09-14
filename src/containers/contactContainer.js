import { Contact } from "../components";
import contact from "../assets/contact.svg";
import { useEffect, useState } from "react";

export default function ContactContainer() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes("success=true")) {
            setSuccess(true);
        }
    }, []);

    return (
        <>
            <Contact.Text>This page is under construction!!! </Contact.Text>
            <Contact>
                {success && <Contact.Text>Thanks for your message! </Contact.Text>}
                <Contact.Wrapper>
                    <Contact.Title>Contact me</Contact.Title>
                    <Contact.Form name="contact" method="POST" action="/contact/?success=true" data-netlify="true">
                        <Contact.Input type="hidden" name="contact-form" value="contact" />

                        <Contact.Input type="text" name="fname" placeholder="Full Name" />
                        <Contact.Input type="email" name="email" placeholder="Email" />
                        <Contact.Input name="message" placeholder="Message" />
                        <Contact.Button type="submit">Submit</Contact.Button>
                    </Contact.Form>
                </Contact.Wrapper>
                <Contact.Wrapper svg>
                    <Contact.Img src={contact} alt="contact" />
                </Contact.Wrapper>
            </Contact>
        </>
    );
}
