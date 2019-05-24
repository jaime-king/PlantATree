import React, { Component } from "react";
import soils from "../soils.jpg";
import trees from "../trees.jpg";
import tools from "../tools.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Shop extends Component {
  render() {
    return (
      <ShopWrapper className="">
        <div className="shop text-center mt-5">
          <i className="fas fa-store" />
          <h2 className=""> STORE</h2>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div class="col-xs-4 ">
              <div className="card ml-3">
                <div className="img-container p-3">
                  <Link to="/soils">
                    <img src={soils} alt="product" className="card-img-top" />
                  </Link>

                  <h3 className="text-center mb-5 mt-3">Soils & Fertilizers</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-4">
              <div className="card ml-3">
                <div className="img-container p-3">
                  <Link to="/products">
                    <img src={trees} alt="product" className="card-img-top" />
                  </Link>

                  <h3 className="text-center mb-5 mt-3">TREES</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-4">
              <div className="card ml-3">
                <div className="img-container p-3">
                  <Link to="/tools">
                    <img src={tools} alt="product" className="card-img-top" />
                  </Link>

                  <h3 className="text-center mb-5 mt-3">TOOLS </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShopWrapper>
    );
  }
}

const ShopWrapper = styled.div`
  .container {
    align-items: center;
    justify-content: center;
    margin-left: 15rem;
  }
  @media only screen and (max-width: 600px) {
    .container {
      margin-left: 5rem;
    }
  }
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
    background: linear-gradient(50deg, #f3c680, hsla(179, 54%, 76%, 1));
    border-radius: 2rem;
    height: 20rem;
    margin-bottom: 4rem;
  }
  h2,
  h3 {
    background: transparent;
  }

  i {
    font-size: 40px;
    text-align: center;
  }

  .shop {
    background: transparent;
  }

  .img-container {
    width: 15rem;
    height: 15rem;
  }
`;
