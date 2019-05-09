import React, { Component } from 'react';
import {Switch,Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
<<<<<<< HEAD
import Login from './components/Login'
=======
>>>>>>> 696ca491c623ba3a21a95c2fc375eea230ec49a8
import CartWindow from './components/CartWindow';

class App extends Component {
  render(){
    return (
      <React.Fragment>

        <Navbar/>
        <Switch>
          <Route exact path="/" component = {ProductList}/>
          <Route path="/details" component = {Details}/>
          <Route path="/cart" component = {Cart}/>
          <Route path="/login" component = {Login}/> 
          <Route component = {Default}/>
        </Switch>
        <CartWindow />
      </React.Fragment>
     
    );

  }
  
}

export default App;
