import { Contact } from "../components";
import contact from "../assets/contact.svg";
import { useState } from "react";

export default function ContactContainer() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", fullName, email, message }),
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));

        e.preventDefault();
    };

    return (
        <>
            <Contact.Text>This page is under construction!!! </Contact.Text>
            <Contact>
                <Contact.Wrapper>
                    <Contact.Title>Contact me</Contact.Title>
                    <Contact.Form name="contact" onSubmit={handleSubmit} data-netlify="true">
                        <Contact.Input type="hidden" name="contact-form" value="contact" />

                        <Contact.Input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <Contact.Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Contact.Input name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
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
