import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="footer d-lg-none">
        <Link to="/">
          <span className="icons ml-5 mr-5">
            <i className="fas fa-home" />
          </span>
        </Link>
        <Link to="/cart">
          <span className="icons ml-5 mr-5">
            <i className="fas fa-shopping-cart" />
          </span>
        </Link>
        <Link to="/login">
          <span className="icons ml-5">
            <i className="fas fa-user" />
          </span>
        </Link>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.nav`
  background-color: black !important;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  width: 100%;
  margin-top: 5rem;

  .footer {
    text-align: center;
    align-content: center;
    //padding-left: 3rem;
  }

.icons i{
    font-size: 30px;
    margin-top: 1.5rem;
    //margin-right: 5rem;
    color: white;
    
}
`
