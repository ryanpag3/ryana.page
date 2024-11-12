import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';
import Variables from './Variables';

const GlobalStyle = createGlobalStyle`
  ${Variables}

  html {
      box-sizing: border-box;
      width: 100%;
      scroll-behavior: smooth;
      font-family: var(--font-sans);
  }

  body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      background-color: ${({ theme }) => theme.background.primary};
      color: ${({ theme }) => theme.text.primary};
  }

  #root {
      min-height: 100vh;
      /* display: grid; */
      /* grid-template-rows: 1fr auto; */
      /* grid-template-columns: 100%; */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  ${TransitionStyles}
`;

export default GlobalStyle;