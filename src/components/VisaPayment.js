import React, {Component} from "react";
import {VisaCreditCard as VisaCard} from "react-fancy-visa-card";


class VisaPayment extends Component {

    pay = (e, data) => {
        console.log(data);

    };

    render() {
        return (
            <div className="container">
            <div className="row">
            
            <div className="VisaPayment">
            
                <VisaCard onSubmit={this.pay} />

            </div>
            
            </div>
            </div>
            
        );
    }
}

export default VisaPayment;