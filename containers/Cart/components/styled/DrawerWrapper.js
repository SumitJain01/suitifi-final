import styled from 'styled-components';

export default styled.div`
  font-family: Roboto, sans-serif;
  color: ${props => props.theme.general.themeFontBlack};
  position: fixed;
  background: #fff;
  right: 0;
  top: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  max-width: 410px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100vh;
  /* fallback value */
  height: -webkit-fill-available;
  width: 100%;
  ${({ pose }) => {
    return pose === 'open' ? 'transform: translateX(0);' : 'transform: translateX(100%);';
  }}
  transition: transform 0.1s ease-in-out;
  box-shadow: 0px 3px 6px #0000001F;

  @media (max-width: 540px) {
    max-width: 90vw;
  }

  .px-rem {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .py-rem {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
