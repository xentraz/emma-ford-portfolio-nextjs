 import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var(--secondary-colour);
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;

  &-overlay {
    grid-column: 1/4;
    grid-row: 1/1;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;

    &-img {
      background-position: center;
      backgrounf-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
 `;