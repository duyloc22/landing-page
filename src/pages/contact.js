import { HeaderContainer } from "../containers/headerContainer";
import ContactContainer from "../containers/contactContainer";
import { useEffect } from "react";
export default function Contact() {
    useEffect(() => {
        document.title = "Loc Pham | Contact";
    }, []);
    return (
        <>
            <HeaderContainer />
            <ContactContainer />
        </>
    );
}
