import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer, ToolConsumer } from "../context";
import CartList from "./CartList";
import ItemsTotal from "./ItemsTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h2 className="text-center mt-4 "> Your Cart </h2>
                  <hr />
                  <CartColumns />
                  <CartList value={value} />
                  <ItemsTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
