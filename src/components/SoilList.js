import React, { Component } from "react";
import SearchField from "react-search-field";
import { SoilConsumer } from "../context";
import Soil from "./Soil";
export default class SoilList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="col mb-4">
              <SearchField
                placeholder="Search..."
                // onChange={this.updateSearch.bind(this)}
                searchText="e.g. gloves"
                classNames="search"
              />
            </div>
            <h2 className="text-center"> Soils Store</h2>
            <div className="row">
              <SoilConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.soils.map(soil => {
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
