import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalized;
  font-size: 1rem;
  background: transparent;
  border: 0.05rem solid black;
  background-color: ${props =>
    props.cartBtnInProductDetails ? "green" : "transparent"};
  color: black;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  width: ${props => (props.cartBtn ? "79.2px" : "")};
  margin-top: ${props => (props.cartBtn ? "0.5rem" : "")};
  background-color: ${props => (props.loginBtn ? "#0062E6" : "transparent")};
  color: ${props => (props.loginBtn ? "white" : "")}
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
