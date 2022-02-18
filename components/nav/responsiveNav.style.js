import styled from "styled-components";

export const ResponsiveNavStyle = styled.div`
display: none;
z-index: 99;
position: relative;

@media (max-width: 700px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  background-color: var(--black);
  opacity: 0.9;
  top: 0;
  width: 100%;

  &.active {
    background-color: var(--black);
    opacity: 0.9;
    height: 70px;
    width: 100%;
  }

  &.test {
    opacity: 0.9;
    height: 100vh;
    width: 100%;
  }
  
  & .logo {
    margin-top: 2rem;
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
    position: relative;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    margin-top: 2rem;

    & div {
      margin: 1rem 0;
    }

    & .navLink {
      &:hover {
        box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
      }
    }
    
    & .isActive {
      margin: 1rem 0;
      box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
      &:hover {
        box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
      }
    }

    &-bar {
      display: block;
      margin: 5px 0;
      font-size: 3.5rem;
      position: absolute;
      cursor: pointer;
      left: 85%;
      top: 5%;
    }

    &-x {
      display: block;
      margin: 5px 0;
      font-size: 3rem;
      position: absolute;
      cursor: pointer;
      left: 85%;
      top: 1%;
    }
  }
}
`;
