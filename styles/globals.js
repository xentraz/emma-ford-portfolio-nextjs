import { createGlobalStyle } from "styled-components";
import media from "styled-media-query"


const GlobalStyle = createGlobalStyle
`
:root {
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

  // Colours
  --primary-colour: #0E899F;
  --primary-colour-trs: #0E899F6c;
  --secondary-colour: #222222;
  --tertiary-colour: #83B5BA;

  --primary-bkg: #EAEAEA;
  --white: #ffffff;
  --black: #000000;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Oswald';
  text-decoration: none;
  list-style: none;
  letter-spacing: 3px;
}

html {
  scroll-behavior: smooth;
}

a {
  font-size: 2rem;
  font-weight: 200;
  text-transform: uppercase;
  text-decoration: none;

  color: var(--white);

  padding: 0px 20px;

  text-align: center;
  margin: 0vh 1vw;

  transition: box-shadow 0.5s ease;
}

`;

export default GlobalStyle;

// body {
//   display: grid;
//   grid-template-areas:
//     'header'
//     'main'
//     'footer';
// }

// header {
//   grid-area: header;
// }

// main {
//   grid-area: main;
// }

// footer {
//   grid-area: footer;
// }

// ${media.lessThan("medium")`
//   /* screen width is less than 768px (medium) */

//   html {
//     background: red;
//   }
// `}

// ${media.between("medium", "large")`
//   /* screen width is between 768px (medium) and 1170px (large) */
//   html {
//     background: green;
//   }
// `}

// ${media.greaterThan("large")`
//   /* screen width is greater than 1170px (large) */
//   html {
//     background: blue;
//   }
// `}