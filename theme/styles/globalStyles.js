import { createGlobalStyle } from 'styled-components';
import config from 'config/env';
import specificStyles from './styles';
import newSliderCss from './newSliderCss';


const GlobalStyle = createGlobalStyle`
  
  ${newSliderCss}

  ul, h3 {
    margin: 0;
  }
  * {
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }
  /* Embedded content
   ========================================================================== */
  /**
  * Remove the border on images inside links in IE 10-.
  */
  img {
  border-style: none;
  max-width: 100%;
  }

  ul {
  padding: 0;
  list-style-type: none;
  }

  /**
  * Hide the overflow in IE.
  */
  svg:not(:root) {
  overflow: hidden;
  }

  /* Grouping content
   ========================================================================== */
  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd 'em' font sizing in all browsers.
  */
  code,
  kbd,
  pre,
  samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
  }

  /**
  * Add the correct margin in IE 8.
  */
  figure {
  margin: 0;
  }

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */
  hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
  }

  /* Forms
   ========================================================================== */
  /**
  * Change font properties to 'inherit' in all browsers (opinionated).
  */
  button,
  input,
  select,
  textarea {
  border-style: none;
  font: inherit;
  }

  /**
  * Restore the font weight unset by the previous rule.
  */
  optgroup {
  font-weight: bold;
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  * 2. Show the overflow in Edge, Firefox, and IE.
  */
  button,
  input,
  select {
  /* 2 */
  overflow: visible;
  }

  /**
  * Remove the margin in Safari.
  * 1. Remove the margin in Firefox and Safari.
  */
  button,
  input,
  select,
  textarea {
  /* 1 */
  margin: 0;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */
  button,
  select {
  /* 1 */
  text-transform: none;
  }

  /**
  * Change the cursor in all browsers (opinionated).
  */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
  cursor: pointer;
  }

  /**
  * Restore the default cursor to disabled elements unset by the previous rule.
  */
  [disabled] {
  cursor: default;
  }

  /**
  * 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video'
  *    controls in Android 4.
  * 2. Correct the inability to style clickable types in iOS.
  */
  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
  -webkit-appearance: none;
  outline: none;
  border: none;
  /* 2 */
  }

  /**
  * Remove the inner border and padding in Firefox.
  */
  button::-moz-focus-inner,
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */
  button:-moz-focusring,
  input:-moz-focusring {
  outline: 1px dotted ButtonText;
  }

  /**
  * Change the border, margin, and padding in all browsers (opinionated).
  */
  fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from 'fieldset' elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    'fieldset' elements in all browsers.
  */
  legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
  }

  /**
  * Remove the default vertical scrollbar in IE.
  */
  textarea {
  overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10-.
  * 2. Remove the padding in IE 10-.
  */
  [type="checkbox"],
  [type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
  height: auto;
  }

  /**
  * Correct the odd appearance of search inputs in Chrome and Safari.
  */
  [type="search"] {
  -webkit-appearance: textfield;
  }

  /**
  * Remove the inner padding and cancel buttons in Chrome on OS X and
  * Safari on OS X.
  */
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  }

  html {
  box-sizing: border-box;
  font-size: 16px;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
  vertical-align: middle;
  }

  a {
  text-decoration: none;
  }

  .no-pad {
  padding: 0!important;
  }

  html {
    box-sizing: border-box;
    font-size: 14px;
    @media (min-width: 1000px) {
      font-size: 15px;
    }
    @media (min-width: 1400px) {
      font-size: 15.2px;
    }
    @media (min-width: 1600px) {
      font-size: 15.4px;
    }
    @media (min-width: 2000px) {
      font-size: 16px;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.62;
    background-color: ${({ theme }) => theme.general.bg};
    color: ${({ theme }) => theme.general.color};
    font-family: ${({ theme }) => theme.fonts.primary};

    &.noScroll {
      overflow: hidden;
    }
  }
  a {
    user-select: none;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.general.linkColor};

    &:hover {
      color: ${({ theme }) => theme.general.linkHover};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: transparent;
  }

  /* h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
    margin: 12px 0;
  }

  h3 {
    font-size: 1rem;
    margin: 8px 0;
  } */

  h4 {
    font-size: 0.8rem;
    margin: 4px 0;
  }

  /* HELPER CLASSES */
  .hidden {
    visibility: hidden;
  }
  .padding-normal {
    padding: 0 8%;
  }

  .accordion__body {
      display: block;
      padding: 1rem;
  }

  .accordion__body--hidden {
      display: none;
  }

  .accordion__title {
    outline: none;
    cursor: pointer;
    h3 {
      margin: 0;
      line-height: 3rem;
      text-transform: uppercase;
      font-size: 1rem;
      color: rgb(171, 30, 86);
    }
  }
  .accordion__item {
    &:not(:last-child) {
      border-bottom: 1px solid #b3b3b3;
    }
  }

  #__next {
    position: relative;
    z-index: 1;
  }
  .mobile-root {
    position: relative;
    z-index: 5;
  }
  .cart-root {
    position: relative;
    z-index: 10;
  }

  }
  body .crisp-client #crisp-chatbox .crisp-1rf4xdh .crisp-kquevr {
    bottom: 1rem!important;

    @media only screen and (min-width: 1024px) {
      bottom: 5rem!important;
      right: 1rem!important;
    }

    & span:nth-child(2) {
      width: 50px!important;
      height: 50px!important;
      background-position: center!important;
      background-size: 20px!important;
      top: 0!important;
      left: 0!important;
    }
  }

/* Facebook button */

.facebookLoginBtnMain {
  background-color: #4267b2;
  margin: 8px;
  border: none;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-family: sans-serif;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
}

.facebookLoginBtnMain:hover {
  background: #5979d1;
}

.facebookLoginBtnMain span {
  float: right;
}



/* X large */

.xLargeFacebookBtn.facebookLoginBtnMain {
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  padding: 6px;
  border-radius: 4px;
}

.xLargeFacebookBtn.facebookLoginBtnMain svg {
  height: 28px;
}

.xLargeFacebookBtn.facebookLoginBtnMain span {
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
}



/* Large */

.largeFacebookBtn.facebookLoginBtnMain {
  height: 26px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  border-radius: 2px;
}

.largeFacebookBtn.facebookLoginBtnMain svg {
  height: 18px;
}

.largeFacebookBtn.facebookLoginBtnMain span {
  height: 18px;
  line-height: 19px;
  padding: 0 12px;
}



/* Medium */

.mediumFacebookBtn.facebookLoginBtnMain {
  height: 22px;
  font-size: 11px;
  font-weight: 500;
  padding: 4px;
  border-radius: 2px;
}

.mediumFacebookBtn.facebookLoginBtnMain svg {
  height: 14px;
}

.mediumFacebookBtn.facebookLoginBtnMain span {
  height: 14px;
  line-height: 16px;
  padding: 0 10px;
}



/* Small */

.smallFacebookBtn.facebookLoginBtnMain {
  height: 18px;
  font-size: 10px;
  font-weight: 500;
  padding: 3px;
  border-radius: 2px;
}

.smallFacebookBtn.facebookLoginBtnMain svg {
  height: 12px;
}

.smallFacebookBtn.facebookLoginBtnMain span {
  height: 12px;
  line-height: 14px;
  padding: 0 8px;
}

  .text-center {
    text-align: center;
  }

  .width-full {
    width: 100%;
  }

  ${specificStyles}
  
`;

export default GlobalStyle;
