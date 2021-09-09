import { useEffect } from "react";
import { HeaderContainer } from "../containers/headerContainer";
import { HeroContainer } from "../containers/heroContainer";
import { MainContainer } from "../containers/mainContainer";

export default function Home() {
    useEffect(() => {
        document.title = "Loc Pham";
    }, []);
    return (
        <>
            <HeaderContainer />
            <HeroContainer />
            <MainContainer />
        </>
    );
}
