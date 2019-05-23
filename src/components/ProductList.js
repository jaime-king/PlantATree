import React, { Component } from "react";
import Product from "./Product";
import SearchField from "react-search-field";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="col mb-4">
              <SearchField
                placeholder="Search..."
                // onChange={this.updateSearch.bind(this)}
                searchText="e.g. neem tree"
                classNames="search"
              />
            </div>
            <div className="shop text-center mt-5">
              <i className="fas fa-tree" />
              <h2 className=""> TREE STORE</h2>
            </div>
            <div className="row">
              <ProductConsumer>
                {/* this function is to call data in context.js */}

                {value => {
                  return value.products.map(product => {
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
