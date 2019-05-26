import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { SoilConsumer } from "../context";
import CartList from "./CartList";
import ItemsTotal from "./ItemsTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <SoilConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartList value={value} />
                  <ItemsTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </SoilConsumer>
      </section>
    );
  }
}
