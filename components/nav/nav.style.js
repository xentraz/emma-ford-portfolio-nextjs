import styled from "styled-components";

export const NavStyle = styled.div`
  .header-menu {
    z-index: 9;
    position: absolute;
    background: transparent;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    height: fit-content;
    width: 100%;

    margin-top: 2rem;

    & .navLink {
      &:hover {
        box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
      }
    }
    
    & .isActive {
      box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
    }
  }
`;
