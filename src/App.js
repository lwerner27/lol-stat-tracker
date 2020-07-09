import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";

// Custom Components
import Navbar from "./components/Navbar";

import "./scss/main.scss";

class App extends React.Component {
    // Constructor Function
    constructor(props) {
        super(props);
        this.state = {
            apiUlr: "",
        };
    }

    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
