import { Contact } from "../components";
import contact from "../assets/contact.svg";

export default function ContactContainer() {
    return (
        <Contact>
            <Contact.Wrapper>
                <Contact.Form name="contact" method="POST" data-netlify="true">
                    {/* <Contact.Input type="hidden" name="form-name" value="contact" /> */}

                    <Contact.Title>Contact me</Contact.Title>
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
    );
}
