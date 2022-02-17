import styled from "styled-components";

export const FooterStyle = styled.footer`
  grid-area: footer;
  background-color: var(--secondary-colour);

  .wrapper {
    height: 30vh;
    width: 90%;
    margin: 0 auto 2vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

   &-contact {
    grid-column: 1/1;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  &-copyright {
    grid-column: 2/2;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
  }

  &-socials {
    grid-column: 3/3;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

  @media screen and (max-width: 850px) {
    .wrapper {
      min-height: 40vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 0.2fr;
    
    &-contact {
      grid-column: 1/1;
      grid-row: 1/1;
      justify-content: center;
      align-items: center;
      margin-bottom: 0vh;
    }
    &-copyright {
      grid-column: 1/1;
      grid-row: 3/3;
      margin-bottom: 2vh;
    }

    &-socials {
      grid-column: 1/1;
      grid-row: 2/2;
    }
   }
  }

`;
