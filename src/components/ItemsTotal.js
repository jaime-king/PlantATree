import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';
import VisaPayment from './VisaPayment';

export default function ItemsTotal({value, history}) {
    const {cartTotal, clearCart} = value;
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-5 ml-sm-2 ml-col-md-auto col-sm-8 text-center align-items-center container-fluid">
                  <Link to="/">
                  <button className="btn btn-outline-danger text-center text-uppercase mb-5 px-5" type="button" onClick={() => clearCart()}> remove all items </button>
                  </Link>

                  <div className="select mb-4">
                  <h5>Delivery or Pick up from the store?</h5>
                  <select className="text-uppercase">
                    <option value="Delivery"> Delivery</option>
                    <option value="Pickup">Pick up</option>
                  </select>

                  </div>
                  
                  <h5 className="">
                    <span className="text-title">
                      Total Price: 
                    </span>
                    <strong>$ {cartTotal}</strong>
                  </h5>
                  <h3 className="mt-5 text-uppercase"> <i class="fas fa-credit-card"></i> Payment</h3>
                  <hr></hr>
                  <PayPalButton total ={cartTotal} clearCart = {clearCart} history = {history} />
                  <hr></hr>
                  {/* <VisaPayment /> */}
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}
