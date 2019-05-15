import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Login from "./components/Login";
import CartWindow from "./components/CartWindow";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={ProductList} />
          <Route path="/home" component={Home} />
          <Route component={Default} />
        </Switch>
        <CartWindow />
        <hr />
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;