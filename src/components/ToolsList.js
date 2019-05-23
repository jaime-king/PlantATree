import React, { Component } from "react";
import SearchField from "react-search-field";
import { ToolConsumer } from "../context";
import Tool from "./Tool";
export default class ToolsList extends Component {
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
            <h2 className="text-center"> Tools Store</h2>
            <div className="row">
              <ToolConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.tools.map(tool => {
                    return <Tool key={tool.id} tool={tool} />;
                  });
                }}
              </ToolConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
