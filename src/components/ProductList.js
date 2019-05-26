import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

function searchingFor(term) {
  return function(search) {
    return search.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
export default class ProductList extends Component {
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
              <i className="fas fa-tree" />
              <h2 className=""> TREES STORE</h2>
            </div>
            <div className="row">
              <ProductConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.products
                    .filter(searchingFor(this.state.term))
                    .map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
