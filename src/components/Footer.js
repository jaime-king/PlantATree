import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="footer d-lg-none">
        <div className="footer-icon">
          <Link to="/">
            <span className="icons ">
              <i className="fas fa-home" />
            </span>
          </Link>
        </div>
        <div className="footer-icon">
          <Link to="/cart">
            <span className="icons ">
              <i className="fas fa-shopping-cart" />
            </span>
          </Link>
        </div>
        <div className="footer-icon">
          <Link to="/login">
            <span className="icons ">
              <i className="fas fa-user" />
            </span>
          </Link>
        </div>
      </FooterWrapper>
    );
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
  align-items: center;
  justify-content: center;
  text-align: center;
  .footer {
    //padding-left: 3rem;
  }

  .footer-icon {
    display: inline-block;
    margin-right: 10%;
    margin-left: 10%;
  }

  .icons i {
    font-size: 30px;
    margin-top: 1.5rem;

    color: white;
    float: none;
  }
`;
