import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { MenuButtons } from "./MenuButtons";

export default class Navbar extends Component {
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <NavWrapper className=" navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <Link to="/home">
                    <MenuButtons>
                      <i className="fas fa-home mr-5" />
                      HOME
                    </MenuButtons>
                  </Link>
                  <Link to="/store">
                    <MenuButtons>
                      <i className="fas fa-store mr-5" />
                      STORE
                    </MenuButtons>
                  </Link>
                  <Link to="/login">
                    <MenuButtons>
                      <i className="fas fa-user mr-4" />
                      PROFILE
                    </MenuButtons>
                  </Link>
                  <Link to="">
                    <MenuButtons>
                      <i className="fas fa-info-circle mr-3" />
                      ABOUT US
                    </MenuButtons>
                  </Link>
                  <Link to="/contact-us">
                    <MenuButtons>
                      <i className="fas fa-envelope mr-4" />
                      CONTACT US
                    </MenuButtons>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to="/home">
          <img src={logo} alt="store" className="navbar-brand ml-5" />
        </Link>

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
    justify-content: center;
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
