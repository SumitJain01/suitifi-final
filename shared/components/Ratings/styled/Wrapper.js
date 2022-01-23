import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  unicode-bidi: bidi-override;
  color: #cccccc;
  font-size: 25px;
  height: 25px;
  width: auto;
  margin: 0;
  position: relative;
  padding: 0;

  .rating-upper {
    color: #FFBC0B;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .rating-lower {
    padding: 0;
    display: flex;
    z-index: 0;
  }

  @media only screen and (max-width: 760px) and (min-width: 320px) {
    font-size: 18px;
  }
`;
