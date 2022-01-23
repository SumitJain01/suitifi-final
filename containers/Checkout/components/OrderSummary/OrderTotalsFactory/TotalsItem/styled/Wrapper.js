import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  
  &:not(:last-child) { border-bottom: 1px solid #f8f8f8; }
  
  /* span {
    font-size: ${({ isPrimary }) => isPrimary ? 16 : 14}px;
  } */

  .item-label {
    color: ${props => props.theme.colors.mediumGray};
  }

  .item-value {
    font-weight: 500;
    white-space: pre;

    .shipping-tooltip__container {
      display: none;
      white-space: initial;

      svg { margin-bottom: 2px; }
    }
  }

  &.coupon-discount .item-value {
    color: #FF0000;
  }

  &.grand-total {
    padding-top: 0.2rem;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.smoke};

    .item-value {
      font-size: 1.4rem;
    }
  }

  &.shipping-charges .shipping-tooltip__container {
    display: initial;
    position: relative;

    .info-icon {
      color: ${props => props.theme.general.primaryColor};
      margin-right: 0.5rem;
    }

    .tooltiptext {
      visibility: hidden;
      /* width: 120px; */
      background-color: #1D1D1DCC;;
      color: #fff;
      text-align: center;
      transform: translateX(-95%) translateY(110%);
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 8px;
      opacity: 0;
      transition: opacity 0.3s;
      width: 60vw;
      max-width: 320px;
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;


      ::after {
        content: "";
        position: absolute;
        bottom: 98%;
        right: 2%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
      }
    }

    :hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }

  &.items-discount .item-value:before {
    content: '-';
  }

  @media only screen and (min-width: 768px) {
    .item-value {
      font-size: 1.1rem
    }
  }
`;
