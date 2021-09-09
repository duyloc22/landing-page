import { useEffect } from "react";
import { HeaderContainer } from "../containers/headerContainer";
export default function NotFound() {
    useEffect(() => {
        document.title = "Loc Pham | Notfound";
    }, []);
    return (
        <>
            <HeaderContainer />
            <p>notfound</p>
        </>
    );
}
