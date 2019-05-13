import React from 'react';
import styled from 'styled-components'

export default function CartItem( {item, value}) {

    const {id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
  return (

    <CartItemWrapper className="">
    <div className="row my-4 text-center">
        <div className=" col-10 mx-auto col-lg-2">
           <img src={img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product" />
        </div>
        <div className=" col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> Product :</span> {title}
        </div>

        <div className=" col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> Price :</span>  ${price}
        </div>

        <div className=" col-10 mx-auto col-lg-2 my-2 my-lg-0">
           <span className="d-lg-none"> Quantity</span>
            <div className = "d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={()=> decrement(id)}>-</span>
                    <span className="btn btn-black-count mx-1" >{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=> increment(id)}>+</span>
                </div>
            </div>
        </div>

        <div className=" col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick= {() => removeItem(id)}> 
            <i className="fas fa-trash"></i>
            </div>
        </div>
        
        <div className=" col-10 mx-auto col-lg-2">
            <strong className="text-center text-uppercase">Item total price:  ${total}</strong>
        </div>
        <hr></hr>

    </div>
    
    </CartItemWrapper>
    
  )
}

const CartItemWrapper = styled.div`

border: 0;
border-radius: 1rem;
margin-bottom: 1rem;
background:  white;
box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
justify-content: center;
padding-top: 1rem;
padding-bottom: 1rem;

&:hover{
    background: linear-gradient(50deg, #f3c680, hsla(179,54%,76%,1));
    //color:white;
    box-shadow: none;
}
`