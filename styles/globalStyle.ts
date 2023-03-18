import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { notoSansKrLight } from './font/notoSansKr';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  #root {
    margin: 0 auto;
  }
  
  * {
    box-sizing: border-box;
  }

  body, button {
    font-family: ${notoSansKrLight.style.fontFamily};
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;