import styled from "styled-components";

export const HobbiesStyle = styled.div`
background-color: var(--primary-bkg);

.hobbies,
.skills {
  width: 90%;
  margin: 2vh auto;
  display: grid;
  grid-template-rows: 1fr 4fr;

  padding-bottom: 4vh;

  &_heading,
  &_heading {
    grid-row: 1/1;

    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
  }

  &_list {
    grid-row: 2/2;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  &_cards {
    height: 25vh;
    width: 25vw;

    margin: 0vh 2vw 2vh 2vw;

    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    background-color: var(--secondary-colour);

    &:hover {
    box-shadow: 1px 1px 24px 1px rgba(34, 34, 34, 0.51);
    -webkit-box-shadow: 1px 1px 24px 1px rgba(34, 34, 34, 0.51);
    -moz-box-shadow: 1px 1px 24px 1px rgba(34, 34, 34, 0.51);
    }
  }
}

`;
