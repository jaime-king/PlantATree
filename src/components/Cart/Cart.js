import React, { Component } from 'react'
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;

            if(cart.length > 0){
              return (
                <React.Fragment>
                  <h2 className="text-center mt-4"> Your Cart </h2>
                  <hr></hr>
                  <CartColumns />
                  <CartList value = {value }/>
                </React.Fragment> 
              );
            }
            else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
        
        
      </section>
    );
  }
}
