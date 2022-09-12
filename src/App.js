import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
