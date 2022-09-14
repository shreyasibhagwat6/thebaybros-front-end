import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
      <>
      <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/details" exact component={Details}></Route>
            </Switch>
        </BrowserRouter>
      <Footer /> 
      </>
    );
}

export default App;
