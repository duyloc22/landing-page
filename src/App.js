import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, About } from "./pages";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.ABOUT}>
                    <About />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
