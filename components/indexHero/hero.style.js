 import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var(--secondary-colour);
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;  

  & .hero-nav {
    z-index: 99;
    grid-row: 1 / 1;
    grid-column: 1 / 4;
    width: 100%;
  }

  & .hero-overlay {
    z-index: 2;
    grid-row: 1 / 3;
    grid-column: 2 / 4;
    
    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    }

  & .hero-logo {
    z-index: 100;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    cursor: pointer;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    &-img {
      width: 250px;
      height: 100px;

      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

    & .hero-text {
      z-index: 9;
      grid-row: 2 / 3;
      grid-column: 1 / 4;

      width: 90%;
      margin: 4vh auto 0;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
 `;