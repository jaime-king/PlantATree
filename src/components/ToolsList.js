import React, { Component } from "react";
import SearchField from "react-search-field";
import { ToolConsumer } from "../context";
import Tool from "./Tool";

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class ToolsList extends Component {
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
              <i className="fas fa-toolbox" />
              <h2 className=""> TOOLS STORE</h2>
            </div>
            <div className="row">
              <ToolConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.tools
                    .filter(searchingFor(this.state.term))
                    .map(tool => {
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
