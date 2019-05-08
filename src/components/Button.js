import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalized;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--mainDark);
color: var(--mainDark);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainDark);
    color:var(--mainWhite);
}
&:focus {
    outline: none;
}
`;