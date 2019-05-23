import React, { Component } from 'react';
import HomeSpecials from './HomeSpecials';
import './Home.css';

export default class Home extends Component {

  render() {
    return (

      <React.Fragment>
      <header className="App-header"></header>
          <div className="py-5">
            <div className="container">

            <h2 className="text-center"> Home Page</h2>
            <HomeSpecials/>
            </div>

          </div>
        </React.Fragment>

    );
  }
}