import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/details" exact component={Details}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
