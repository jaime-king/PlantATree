import React, { Component } from 'react';
import Product from './Product';

import {ProductConsumer} from '../context';
export default class ProductList extends Component {


  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <h2 className="text-center"> Tree Store</h2>
            <div className="row">


              <ProductConsumer>
                {/* this function is to call data in context.js */}

                {(value) => {
                  return value.products.map( product => {
                    return <Product key={product.id} product={product}/>
                  })
                }}
              </ProductConsumer>

            
            </div>
          </div>
        </div>

      </React.Fragment>
      
    );
  }
}