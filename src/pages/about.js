import { useEffect } from "react";
import { HeaderContainer } from "../containers/headerContainer";
export default function About() {
    useEffect(() => {
        document.title = "Loc Pham | About";
    }, []);
    return (
        <>
            <HeaderContainer />
            <p>about</p>
        </>
    );
}
