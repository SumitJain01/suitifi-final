import { darken } from 'polished';
import { easing, tween } from 'popmotion';

export const defaultEase = easing.cubicBezier(0.4, 0.02, 0.2, 1);
export const easingObject = {
  transition: ({ from, to }) => tween({ from, to, ease: defaultEase }),
};
export const easeString = 'cubic-bezier(0, 0.42, 0, 1)';

const theme = {
  text: {
    h1: {
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
    h2: {
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
    },
  },
  scheme: {
    accent: '#3ca0da',
    darkAccent: '#3fa5e5',
    highlight: '#7ab840',
    white: '#FCFFFE',
    black: '#050609',
    orange: '#e0b252',
  },
  buttons: {
    color: '#fff',
    bg: darken(0.1, '#E30B5D'),
  },
  header: {
    bg: '#fff',
  },
  footer: {
    bg: '#fff',
  },
  general: {
    primaryColor: '#E30B5D',
    darkPrimaryColor: darken(0.1, '#E30B5D'),
    secondaryColor: '#5CB8B2',
    lightSecondaryColor: '#E2F2F2',
    successColor: '#00BA18',
    errorColor: '#EC002B',
    themeRed: '#FF0000',
    themeLightGreen: '#DEF5F4',
    themeFontBlack: '#1D1D1D',
    color: '#1d1e21',
    linkColor: '#8A8C8B',
    linkHover: darken(0.1, '#8A8C8B'),
    bg: '#fff',
    lightBg: '#f7f7f7',
    rounded: '2rem',
    borderColor: '#DBDBDB',
    borderColor2: '#E8E8E8',
    borderRadius: '12px',
    bs: '0 0 1px 0.5px rgba(0, 0, 0, 0.09)',
    bsDeep: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
  },
  colors: {
    white: '#fff',
    offWhite: '#fcffee',
    black: '#050609',
    gray: '#E6E8E7',
    darkGray: '#333',
    mediumGray: '#5C5C5C',
    lightGray: '#bdbdbd',
    maxWidth: '1000px',
    brown: '#705F5A',
    accent: '#705F5A',
    darkAccent: '#011936',
    red: '#d32f2f',
    silver: '#AAAAAA',
    smoke: '#EAEAEA',
    themeOrange: '#FFC100',
    themePlaceholderGray: '#989898',
  },
  fonts: {
    primary: 'Roboto',
    secondary: 'Roboto',
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 0.4, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 90, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 95, // em
    },
  },
  state: {
    selected: '#FAFAFA',
    inert: '#F7F7F7',
    passive: '#999999',
  },
};

export default theme;
