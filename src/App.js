import "./App.css";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, About, Contact, NotFound } from "./pages";

function App() {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path={ROUTES.ABOUT}>
                        <About />
                    </Route>
                    <Route path={ROUTES.CONTACT}>
                        <Contact />
                    </Route>
                    <Route exact path={ROUTES.HOME}>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
