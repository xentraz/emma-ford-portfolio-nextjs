import styled from "styled-components";

export const AboutMeStyle = styled.div`
  height: fit-content;
  margin-bottom: 2vh;
  background-color: var(--white);

  & .aboutMe {
    width: 90%;
    margin: 2vh auto;
    height: fit-content;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;

    &-text {
      grid-column: 1/1;
      grid-row: 1/1;

      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;

      & h2 {
        width: fit-content;
      }
    }

    &-img {
      grid-column: 2/2;
      grid-row: 1/1;

      height: 100%;
      width: 100%;
      margin: auto;

      display: flex;
      justify-content: center;
      align-items: flex-end;

      overflow:visible;

      &-wrapper {
        box-shadow: 12px -12px 0px 3px var(--secondary-colour);
        -webkit-box-shadow: 12px -12px 0px 3px var(--secondary-colour);
        -moz-box-shadow: 12px -12px 0px 3px var(--secondary-colour);
      }
    }
  }
`;

