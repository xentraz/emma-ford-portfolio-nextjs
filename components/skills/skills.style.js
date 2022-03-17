import styled from "styled-components";

export const SkillsStyle = styled.div`
  height: fit-content;
  margin-bottom: 1em;
  background-color: var($primary-bkg);

  & .container {
    width: 90%;
    margin: 0 auto 2em;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;

    &-skills {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 0.5em;

      & h3 {
        margin-bottom: 0.5em;
      }
      
      &-soft, &-hard {
        border-right: 2px solid var($primary-colour);
      }

      &-soft, &-hard, &-software {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      &-soft {
        grid-column: 1/1;
        grid-row: 1/1;
      }

      &-hard {
        grid-column: 2/2;
        grid-row: 1/1;
      }

      &-software {
        grid-column: 3/3;
        grid-row: 1/1;

        display: flex;
        justify-content: flex-start;

        &-icons {
          height: 100%;
          width: 90%;
          margin: auto;

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    &-heading {
      grid-column: 1/1;
      grid-row: 1/1;
  
      display: flex;
      justify-content: flex-end;
      align-items: center;
  
      & h2 {
        width: fit-content;
      }
    }

    @media (max-width: 960px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 8fr;
      
      &-skills {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-column-gap: 0.2em;

        &-soft, &-hard, &-software {
          border-top: 2px solid var($primary-colour);
          border-right: none;

          padding: 0.5em;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }

        &-soft {
          grid-column: 1/1;
          grid-row: 1/1;
        }

        &-hard {
          grid-column: 1/1;
          grid-row: 2/2;
        }

        &-software {
          grid-column: 1/1;
          grid-row: 3/3;  
      }
    }
  }
}
`;

