import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/details" element={ <ProductDetails /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
