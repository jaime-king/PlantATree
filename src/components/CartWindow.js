import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


export default class CartWindow extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) => {
              const {modalOpen, closeModal} = value;
              const {img, title, price, height} = value.modalProduct;

              if(!modalOpen){
                  return null;
              }
              else{
                  return (
                  <CartWindowContainer>
                      <div className="container">
                        <div className="row">
                         <div id="cart-window" className=" col-8 mx-auto col-md-6 col-lg-4 text-center p-4">
                           <h4> Item add to the cart</h4>
                           <img src={img} className="img-fluid" alt="product" />
                           <h4> {title} </h4>
                           <h4 className="text-muted text-uppercase"> Price : $ {price} </h4>
                           <h4 className="text-muted text-uppercase"> Height : {height} m</h4>
                           <Link to='/'>
                            <ButtonContainer onClick = {() => closeModal()}> 
                                Continue Shopping
                            </ButtonContainer>
                           </Link>

                           <Link to='/cart'>
                            <ButtonContainer cartBtnInProductDetails onClick = {() => closeModal()}> 
                                Go to cart
                            </ButtonContainer>
                           </Link>
                         </div>
                        </div>
                      </div>
                  </CartWindowContainer>
                  );
              }
          }}
      </ProductConsumer>

    );
  }
}

const CartWindowContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right : 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;

#cart-window {
    background-color: white; 
    border-radius: 3rem;
    box-shadow:2px 2px 5px 0px black;
}
#cart-window img{
    border: 0.05rem solid black;
    border-radius: 2rem;
    margin-bottom: 1rem;
}
`
