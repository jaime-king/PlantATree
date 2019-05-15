import styled from "styled-components";

export const MenuButtons = styled.button`
  text-transform: capitalized;
  font-size: 1rem;
  background: transparent;
  border: none;
  box-shadow: 1px 1px 4px 0 black;
  background: linear-gradient(#3c4e59, #212326);
  color: white;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    //background: black;
    opacity: 0.5;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
