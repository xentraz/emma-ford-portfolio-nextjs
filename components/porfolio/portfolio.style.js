import styled from "styled-components";

export const PortfolioStyle = styled.footer`
min-height: 40vh;

.project {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 2vh 0vw 2vh 0vw;
}

.project_headingL,
.project_headingR {
  width: 95%;

  display: inline-flex;
}

.project_headingL {
  justify-content: flex-start;
  margin-bottom: 2vh;
}

.project_headingR {
  justify-content: flex-end;
  margin-bottom: 2vh;
}

.project_img,
.project_dsc {
  display: inline-flex;
  align-items: center;
}

.project_dsc p span {
  font-style: italic;
}

.project_img {
  justify-content: center;
  width: 95%;

  margin-bottom: 2vh;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.project_img .main_img {
  grid-column: 1/1;
  grid-row: 1/3;

  width: 90%;
}

.project_img .side_img {
  width: 90%;
  border: 2px solid var(--dark-grey);
  margin: 0vh 0vw 2vh 0vw;
}

.top {
  grid-column: 2/2;
  grid-row: 1/1;
}

.bottom {
  grid-column: 2/2;
  grid-row: 2/2;
}

.project_dsc {
  text-align: center;

  width: 95%;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.project_dsc .projeect_link {
  width: 100%;
}

.r {
  background-color: var(--light-grey);
}

/* Image Modal */
.img {
  cursor: pointer;
  transition: 0.3s;
}

.img:hover {
  opacity: 0.85;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.modal_content {
  animation-name: zoom;
  animation-duration: 0.3s;
}

@media screen and (max-width: 600px) {
  .project_img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .project_img .main_img {
    grid-column: 1/1;
    grid-row: 1/1;

    width: 90%;
    margin: auto;

    margin-bottom: 2vh;
  }

  .top {
    grid-column: 1/1;
    grid-row: 2/2;

    width: 90%;
    margin: auto;
  }

  .bottom {
    grid-column: 1/1;
    grid-row: 3/3;

    width: 90%;
    margin: auto;
  }
}

`;
