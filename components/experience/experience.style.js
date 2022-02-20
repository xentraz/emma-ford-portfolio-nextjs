import styled from "styled-components";

export const ExperienceStyle = styled.div`
 background-color: var(--white);
 min-height: 50vh;
 width: 90%;
 margin 2vh auto;

 .experience {
  &_heading {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  &_list {
    position: relative;
    max-width: 90vw;
    margin: 2vh auto;
    &::after {
      content: '';
      position: absolute;
      width: 9px;
      background-color: var(--primary-colour);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }

    ul {
      margin: 0px;
      padding: 0px;
      li {
        list-style: none;
        margin: 0vh 0vw 1vh 0vw;
        i {
          color: var(--blue);
          font-size: 1.2rem;
        }
      }
    }

    & .job {
      padding: 0vh 2vw;
      position: relative;
      background-color: inherit;
      width: 50%;
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        right: -20px;
        background-color: var(--secondary-colour);
        border: 4px solid var(--primary-colour);
        top: 50%;
        border-radius: 50%;
        z-index: 1;
      }
    }

    // NOTE: Don't need this if you used flex box;
    & .left {
      left: 0;

      @media (max-width: 750px) {
        left: 0;
        width: 100%;
        &::after {
          left: 0px;
        }
      }
    }

    & .right {
      left: 50%;
      &::after {
      left: -20px;
      }

      @media (max-width: 750px) {
        left: 0;
        width: 100%;
        &::after {
          left: 0px;
        }
      }
    }

    .job_info {
      padding: 20px 30px;
      background-color: white;
      position: relative;
      border-radius: 6px;
    }

    @media (max-width: 750px) {
      &::after {
        left: 0;
        margin-left: -10px;
      }
    }
  }
}
`;
