import { createGlobalStyle } from "styled-components";
import media from "styled-media-query"

const GlobalStyle = createGlobalStyle
`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} 

${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */

  html {
    background: red;
  }
`}

${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  html {
    background: green;
  }
`}

${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
  html {
    background: blue;
  }
`}
`;

export default GlobalStyle;