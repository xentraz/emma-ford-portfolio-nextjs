import styled from "styled-components";

export const CTAStyles = styled.div`
  transition: box-shadow 0.5s ease;

  & a {
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: inset 0 -5.5rem 0 var(--primary-colour-trs);
    margin: 0;

    &:hover{
      box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
    }
  }
 `;