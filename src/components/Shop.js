import React, { Component } from "react";
import soils from "../img/soils.jpg";
import trees from "../img/trees.jpg";
import tools from "../img/tools.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Shop extends Component {
  render() {
    return (
      <ShopWrapper className="text-center items-align-center">
        <div className="shop mt-5">
          <i className="fas fa-store" />
          <h2 className=""> STORE</h2>
        </div>
        <br />
        <div className="container">
          <div className="card">
            <div className="img-container p-3">
              <Link to="/soils">
                <img src={soils} alt="product" className="card-img-top" />
              </Link>

              <h3 className="text-center mb-5 mt-3">Soils</h3>
            </div>
          </div>

          <div className="card ml-3">
            <div className="img-container p-3">
              <Link to="/products">
                <img src={trees} alt="product" className="card-img-top" />
              </Link>

              <h3 className="text-center mb-5 mt-3">TREES</h3>
            </div>
          </div>

          <div className="card ml-3">
            <div className="img-container p-3">
              <Link to="/tools">
                <img src={tools} alt="product" className="card-img-top" />
              </Link>

              <h3 className="text-center mb-5 mt-3">TOOLS </h3>
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
    text-align: center;
    //margin-left: 15.5%;
    float: none;
  }

  .card {
    border-color: transparent;
    transition: all 0.5s linear;
    background: linear-gradient(50deg, #f3c680, hsla(179, 54%, 76%, 1));
    border-radius: 2rem;
    height: 20rem;
    margin-bottom: 4rem;
    display: inline-block;
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

  @media only screen and (max-width: 600px) {
    .container {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .card {
      border-radius: 0.5rem;
      width: 6rem;
      height: 5rem;
      display: inline-block;
    }
    .img-container {
      width: 6rem;
      height: 6rem;
    }
    .card-img-top {
      width: 3rem;
      height: 3rem;
    }
    h3 {
      font-size: 12px;
    }
  }
`;
