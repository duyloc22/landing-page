import { Contact } from "../components";
import contact from "../assets/contact.svg";

export default function ContactContainer() {
    return (
        <Contact>
            <Contact.Wrapper>
                <Contact.Form name="contact" method="POST" netlify>
                    {/* <Contact.Input type="hidden" name="form-name" value="contact" /> */}

                    <Contact.Title>Contact me</Contact.Title>
                    <Contact.Input placeholder="Full Name" />
                    <Contact.Input placeholder="Email" />
                    <Contact.Input placeholder="Message" />
                    <Contact.Button>Submit</Contact.Button>
                </Contact.Form>
            </Contact.Wrapper>
            <Contact.Wrapper svg>
                <Contact.Img src={contact} alt="contact" />
            </Contact.Wrapper>
        </Contact>
    );
}
