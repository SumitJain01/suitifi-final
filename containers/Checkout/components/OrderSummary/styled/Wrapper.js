import styled from 'styled-components';

export default styled.div`
  overflow: hidden;
  width: 100%;

  /* &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: transparent;
    background-image: radial-gradient(farthest-side,rgba(0,0,0,0) 6px,#f7f7f7 0);
    background-size: 15px 15px;
    top: -10px;
    background-position: -3px -5px , 0 0;
  } */

  .newItemList {
    @media (min-width:768px) {
      max-height: 250px;
      overflow-x: scroll;
      overflow-y: visible;
      scrollbar-width: thin;
      scrollbar-color: #FFFFFF;
      /* Works on Chrome/Edge/Safari */
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #FFFFFF;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #C1C1C1;
      }
    }
  }
  .productSummaryDiv {
    color: #00AFEF;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size: 1.2rem;
    font-weight: 600;
    /* margin: 0.6rem 0rem; */
    margin: 0px -1rem;
    padding: 0.5rem calc(1rem + 5px);
    border-top: 5px solid #f2f9e8;
    @media (min-width:768px) {
      display: none;
    }
  }
  .AmountPayableDiv {
    color: #5C5C5C;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.6rem 0rem;
    @media (min-width:768px) {
      display: none;
    }
  }
  .oswrapper {
    @media (min-width:768px) {
      display: none;
    }
  }
  .amountPayable {
    font-size: 1rem;
    font-weight: 400;
    color: #5C5C5C;
  }

  .px-rem {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .OrderSummary_Content {
    margin-top: 1rem;
    h2 {
      text-align: center;
      margin-top: 1rem;
    }
  }

  .coupon-wrapper.isCheckout {
    margin-top: 0.75rem;
  }

  @media only screen and (min-width: 768px) {
    .for-mobile { display: none; }
  }
`;
