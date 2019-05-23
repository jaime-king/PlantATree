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
import Shop from "./components/Shop";
import ToolsList from "./components/ToolsList";
import SoilList from "./components/SoilList";
import ToolCartWindow from "./components/ToolCartWindow";
import SoilCartWindow from "./components/SoilCartWindow";
import ToolsDetails from "./components/ToolsDetails";
import SoilsDetails from "./components/SoilsDetails";
import FormPage from "./components/ContactUs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/tools-details" component={ToolsDetails} />
          <Route path="/soils-details" component={SoilsDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={ProductList} />
          <Route path="/tools" component={ToolsList} />
          <Route path="/soils" component={SoilList} />
          <Route path="/home" component={Home} />
          <Route path="/store" component={Shop} />
          <Route path="/contact-us" component={FormPage} />
          <Route component={Default} />
        </Switch>
        <CartWindow />
        <ToolCartWindow />
        <SoilCartWindow />
        <hr />
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;