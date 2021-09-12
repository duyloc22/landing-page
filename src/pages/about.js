import { useEffect } from "react";
import { HeaderContainer } from "../containers/headerContainer";
import AboutContainer from "../containers/aboutContainer";

export default function About() {
    useEffect(() => {
        document.title = "Loc Pham | About";
    }, []);
    return (
        <>
            <HeaderContainer />
            <AboutContainer />
        </>
    );
}
