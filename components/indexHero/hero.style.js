 import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var($secondary-colour);
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;  

  & .hero-nav {
    z-index: 10;
    grid-row: 1 / 1;
    grid-column: 1 / 4;

    width: 90%;
    heihgt: 100%;
    margin: auto;

    @media (max-width: 700px) {
      width: 100%;
    }
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

    @media screen and (max-width: 850px) {
      .nav_bars {
        display: block;
        z-index: 13;
        width: 100%;
        position: fixed;

        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 45px;
      }

      .bars_click {
        font-size: 3rem !important;
        text-decoration: none;
        color: var($blue);

        cursor: pointer;
      }

      .close_btn {
        display: block;
        width: fit-content;
        z-index: 12;

        font-size: 5rem !important;
        text-decoration: none;
        top: 20px;
        right: 45px;
      }

      .header_overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 11;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.9);
        overflow-y: hidden;
        transition: 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .header_overlay .header_menu {
        top: 15%;
        width: 100%;

        z-index: 9;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .header_menu a {
        margin: 2vh;
      }
    }

    @media screen and (max-width: 500px) {
      .hero-logo {
        width: 200px;
      }

      .cta_button {
        width: 100%;
      }
    }

    @media screen and (max-width: 400px) {
      .hero-logo {
        width: 185px;
      }
    }

 `;