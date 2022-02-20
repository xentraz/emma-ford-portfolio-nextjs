import styled from "styled-components";

export const NavStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  & .logo {
    // NOTE: How are you keeping track of z-index used throughout your app
    z-index: 99;
    cursor: pointer;

    &-img {
      width: 250px;
      height: 100px;

      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .header-menu {
    z-index: 99;
    background: transparent;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    height: fit-content;
    width: 100%;

    & .navLink {
      &:hover {
        box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
      }
    }

    & .isActive {
      box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
      &:hover {
        box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
      }
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
