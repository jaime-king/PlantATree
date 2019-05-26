import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ToolConsumer } from "../context";
import CartList from "./CartList";
import ItemsTotal from "./ItemsTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ToolConsumer>
          {value => {
            const { toolscart } = value;

            if (toolscart.length > 0) {
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
        </ToolConsumer>
      </section>
    );
  }
}
