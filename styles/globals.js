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

h1, h2, h3 {
  text-transform: uppercase;
  color: var(--white);
}

h1 {
  font-size: 5.5rem;
  font-weight: 500;
}

h2 {
  font-size: 3.5rem;
  font-weight: 300;
  color: #222222;
  box-shadow: inset 0 -2.5rem 0 #0E899F6c;
}

h3 {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--secondary-colour);
}

p,
label {
  font-size: 1.8rem;
  font-weight: 200;
  letter-spacing: 1px;

  color: var(--secondary-colour);
}

li,
input {
  font-size: 1.5rem;
  font-weight: 200;
}

.white {
  color: var(--white);
  box-shadow: none;
}

.italic {
  font-style: italic;
}

.bold {
  font-weight: 400;
}

.blue {
  color: var(--primary-colour);
}

.underline {
  box-shadow: inset 0 -1.5rem 0 var(--primary-colour-trs);
}

.social_icons {
  font-size: 3rem;
  padding: 0vh;
}


@media screen and (max-width: 850px) {
  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 2.5rem;
    box-shadow: inset 0 -1.6rem 0 var(--primary-colour-trs);
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 2rem;
    box-shadow: inset 0 -1.2rem 0 var(--primary-colour-trs);
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.8rem;
    box-shadow: inset 0 -1rem 0 var(--primary-colour-trs);
  }

  h3 {
    font-size: 1.6rem;
  }
}

@media screen and (max-width: 450px) {
  h1 {
    font-size: 4rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p,
  label {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 350px) {
  h2 {
    font-size: 1.8rem;
    box-shadow: inset 0 -1rem 0 var(--primary-colour-trs);
  }
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