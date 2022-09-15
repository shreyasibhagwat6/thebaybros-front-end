import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </BrowserRouter>
            <Footer className="mainFooter" />
        </>
    );
}

export default App;
