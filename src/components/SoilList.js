import React, { Component } from "react";
import { SoilConsumer } from "../context";
import Soil from "./Soil";
import SoilIcon from "../img/soils-icon.png";

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class SoilList extends Component {
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);
  }
  state = {
    term: ""
  };

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="search-bar col mb-4">
              <form>
                <i className="fas fa-search" />
                <input
                  type="text"
                  onChange={this.searchHandler}
                  placeholder="Search by name"
                />
              </form>
            </div>
            <div className="shop text-center mt-5">
              <img src={SoilIcon} />
              <h2 className=""> SOILS STORE</h2>
            </div>
            <div className="row">
              <SoilConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.soils
                    .filter(searchingFor(this.state.term))
                    .map(soil => {
                      return <Soil key={soil.id} soil={soil} />;
                    });
                }}
              </SoilConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
