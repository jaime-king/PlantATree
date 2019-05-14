import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className=" footer footer-expand-sm bg-primary  px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

               <Link to= '/'>
                <span className="icons">
                  <i class="fas fa-home"></i>
                </span>
                </Link>

                <Link to= '/login'>
                <span className="icons">
                  <i class="fas fa-user"></i>
                </span>
                </Link>
      </FooterWrapper>
    )
  }
}

const FooterWrapper= styled.nav`
background-color: black !important;
position: absolute;
left:0;
bottom: 0;
height: 5rem;
width: 100%;
margin-top: 5rem;
text-align: center;
flex: 1;


.icons i{
    font-size: 30px;
    margin-top: 1.5rem;
    margin-right:5rem;
    color: white;
    
}
`
