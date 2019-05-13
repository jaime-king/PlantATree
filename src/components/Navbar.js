import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className=" navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className=" nav-item ml-3">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <ul className="ml-auto">
          <li>
            <Link to="/login" className="ml-auto">
              <ButtonContainer loginBtn>
                <span className="mr-2">
                  <i className="fas fa-user" />
                </span>
                Login
              </ButtonContainer>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer cartBtn>
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                Cart
              </ButtonContainer>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: linear-gradient(
    50deg,
    #f3c680,
    hsla(179, 54%, 76%, 1)
  ) !important;
  .nav-link {
    color: black !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    width: 5.5rem;
    height: 5.5rem;
  }

  .profile {
    font-size: ;
  }
  li {
    list-style: none;
  }
`;
