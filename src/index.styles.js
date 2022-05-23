import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import OpenSans400Woff2 from "./fonts/open-sans-v29-latin-regular.woff2";
import OpenSans400Woff from "./fonts/open-sans-v29-latin-regular.woff";
import OpenSans600Woff2 from "./fonts/open-sans-v29-latin-600.woff2";
import OpenSans600Woff from "./fonts/open-sans-v29-latin-600.woff";
import OpenSans700Woff2 from "./fonts/open-sans-v29-latin-700.woff2";
import OpenSans700Woff from "./fonts/open-sans-v29-latin-700.woff";
import AlegreyaSansSC500Woff2 from "./fonts/alegreya-sans-sc-v20-latin-500.woff2";
import AlegreyaSansSC500Woff from "./fonts/alegreya-sans-sc-v20-latin-500.woff";
import AlegreyaSansSC700Woff2 from "./fonts/alegreya-sans-sc-v20-latin-700.woff2";
import AlegreyaSansSC700Woff from "./fonts/alegreya-sans-sc-v20-latin-700.woff";

export const GlobalStyle = createGlobalStyle`
  ${reset}  
  /* open-sans-regular - latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url(${OpenSans400Woff2}) format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${OpenSans400Woff}) format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-600 - latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  src: local(""), url(${OpenSans600Woff2}) format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${OpenSans600Woff}) format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-700 - latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local(""), url(${OpenSans700Woff2}) format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${OpenSans700Woff}) format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* alegreya-sans-sc-500 - latin */
@font-face {
  font-family: 'Alegreya Sans SC';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url(${AlegreyaSansSC500Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${AlegreyaSansSC500Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* alegreya-sans-sc-700 - latin */
@font-face {
  font-family: 'Alegreya Sans SC';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${AlegreyaSansSC700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${AlegreyaSansSC700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}


  body {
    margin: 0 auto;
    width: 1400px;
    max-width: 100%;
    font-family: "Open Sans", "Alegreya Sans SC", sans-serif;
    fonst-size: 16px;
    font-weight: 400;
    color: #939393;
    box-sizing: border-box;
  }
a {
  color: inherit;
  text-decoration: none
}
}`;
