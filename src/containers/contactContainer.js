import { Contact } from "../components";
import contact from "../assets/contact.svg";

export default function ContactContainer() {
    return (
        <Contact>
            <Contact.Wrapper>
                <Contact.Form>
                    <Contact.Title>Contact me</Contact.Title>
                    <Contact.Input placeholder="Full Name" />
                    <Contact.Input placeholder="Email" />
                    <Contact.Input placeholder="Message" />
                    <Contact.Button>Submit</Contact.Button>
                </Contact.Form>
            </Contact.Wrapper>
            <Contact.Wrapper>
                <Contact.Img src={contact} alt="contact" />
            </Contact.Wrapper>
        </Contact>
    );
}
