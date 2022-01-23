import styled from 'styled-components';
import MobileOffStrip from './MobileOffStrip';

export default styled.div`
font-family: Roboto, sans-serif;
background-color: ${props => props.isNewPaymentUI ? '#ffffff' : 'f7f7f7'};

* {
  /* box-sizing: border-box; */
  /* background-color: red; */

}

body {
  font-family: "Roboto", sans-serif;
}

input {
  appearance: none;
  outline: none;
}

.tabContainer {
  display:flex;
  flex-direction:column;

  @media (min-width: 769px) {
    margin-top: 1rem;
    flex-direction: row;
  }
}

.tab {
  /* float: left; */
  border: 1px solid ${props => props.theme.general.borderColor};
  border-radius: 5px;
  min-width: 30%;
  max-width: 30%;
  height: fit-content;
  /* border-right: none;
  background-color: #f7f7f7;
  height: 380px; */
  @media (max-width: 768px) {
      min-width: 100%;
      border:none;
      background-color:white;
      height:auto;
    }
}

.tab > button {
  /* display: block; */
  margin: 0px;
  padding: 1rem 0;
  display: flex;
  color: #777777;
  width: 100%;
  outline: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  /* height: 3.7rem;
  border: none;
  background-color: inherit; */
  
  font-size: 0.85rem;
  line-height: 1rem;
  font-weight: 400;
  
  &:not(:first-of-type) {
    border-top: 1px solid ${props => props.theme.colors.smoke};
  }
  
  @media only screen and (max-width: 767px) {
    transition: 0.3s;
    &.isActive {
      padding-bottom: 0.25rem;
    }
  }
  
  @media only screen and (min-width: 768px) {
    padding: 0.5rem 0.75rem 0.875rem;
    
    &.isActive {
      border-left: 3px solid ${props => props.theme.general.primaryColor};
      background-color: ${props => props.theme.general.lightSecondaryColor};
      
      &:first-of-type {
        border-top-left-radius: 5px;
      }
      &:last-of-type {
        border-bottom-left-radius: 5px;
      }
    }
  }
}

.buttonText {
  font-family: Roboto, sans-serif;
  font-size: 0.85rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.general.themeFontBlack};
}

.cash-icon {
  margin-left: auto;
  
  @media only screen and (min-width: 768px) {
    display: none;
  }
}

.tabcontent {
  /* float: left; */
  margin-left: 0.5rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.general.borderColor};
  border-radius: 5px;
  
  /* width: 70%;
  padding: 0px 12px;
  border-left: none;
  height: 380px;
  background-color: #ffffff; */
  @media (max-width: 767px) {
      display: none;
      min-width: 100%;
      border:none;
      background-color:'white';
      height:auto;
    }
    
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
    width: 100%;
  }
  
  @media only screen and (min-width: 1024px) {
    margin-left: 0.5rem;
    width: 70%
  }
  
  @media only screen and (min-width: 1400px) {
    margin-left: 1rem;
  }
}

.tablinks {
  align-items:center
}

.formMobile {
  margin: 0.25rem 0.25rem 1.5rem 2rem;
  /* background-color:#ffffff;
  padding-left:1rem;
  padding-right:1rem; */
  
  @media only screen and (max-width: 767px) {
    &.paypal {
      margin: 0px;
      margin-top: 0.75rem;
    }
  }
  
  :last-child {
    margin-bottom: 0px;
  }
  
  @media only screen and (min-width: 768px) {
    display: none;
  }
}

.mobileHidden {
  @media (max-width: 767px) {
    display:none;
  }
}
.mobileShow {
  @media (min-width: 768px) {
    display:none;
  }
}
.mobile-button {
  min-height: 56px !important;
  @media (min-width: 768px) {
    display: none;
  }
}

.payment-option-title {
  margin: 0;
  margin-bottom: 0.75rem;
  flex-wrap: nowrap;
}

.online-pay-off {
  padding: 0.25rem 0.35rem 0.15rem;
  border: 1px solid #1BBB33;
  border-radius: 5px;
  background-color: #1BBB330D;
  color: #1BBB33;
  font-size: 0.7rem;
  line-height: 1.2em;
  text-align: center;
  
  .pay-off-title {
    font-weight: 700;
  }
  .pay-off-subtitle {
    font-weight: 400;
  }
  
  @media only screen and (min-width: 1024px) {
    height: min-content;
  }
  
  @media only screen and (min-width: 1400px) {
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
  }
}

.reset-p {
  margin: 0;
}

.paymentTitle{
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 500;
}

.inputField{
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  height: 2.5rem;
  width: 100%;
  border-radius: 5px;
}

.payNowBtn{
  width: 100%;
  height: 2.5rem;
  margin: 1rem 0px;
  padding: 0;
  border-radius: 5px;
  font-size: 0.925rem;
  background-color: ${({ theme }) => theme.general.primaryColor};
  letter-spacing: 0.5px;
  font-family: Roboto, sans-serif;

  @media (max-width: 767px) {
    margin: 0px;
     /* position:fixed; */
     height: 3rem;
     font-size: 1.2rem;
     /* bottom:0;
     left:0;
     z-index:10; */
     border-radius:0px;
    }
}

.bottom-fixed-container {
  @media (max-width: 767px) {
    margin: 0px;
    width: 100%;
    position:fixed;
    bottom:0;
    left:0;
    z-index:10;
  }
}

@media (min-width: 768px) {
  ${MobileOffStrip} {
    display: none;
  }
}

.h4{
  opacity: 0.2;
}

.expiryDateCol{
  display: flex;
}

.expiryDate{
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 12px;
  height: 2.5rem;
  width: 6rem;
  border-radius: 5px;
}

.cardCVV{
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  height: 2.5rem;
  width: 6rem;
  border-radius: 5px;
}

#banklist{
  background-color: #eeefff;
  width: 100%;
  height: 2rem;
}

.creditCardImage{
  width: 45px;
}

.btn-tabs-image{
  width: 15px;
  fill: #ffffff;
}

.Thankyou_Title {
    color: ${({ theme }) => theme.scheme.highlight};
    border: ${({ theme }) => theme.scheme.highlight} dashed 2px;
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 1.5rem 1rem;
  }

  .Payment_Failed {
    color: #41a8dd;
    border: #41a8dd dashed 2px;
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 1.5rem 1rem;
  }


.container {
  /* display: block;
  position:relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  background-color: red;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
}

.container input[type="checkbox"] {
  display: none;
}
.container input[type="checkbox"] + span {
  display: inline-block;
  position: relative;
  top: -1px;
  width: 12px;
  height: 12px;
  margin: -1px 0px 0 0;
  vertical-align: middle;
  background: white left top no-repeat;
  border: 1px solid #ccc;
  cursor: pointer;
}
.container input[type="checkbox"]:checked + span {
  background: #D9534F -19px top no-repeat;
}

.container input[type="checkbox"] + span {
  margin-right: 4px;
}

.PaymentBanner {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  /* height: 380px; */
  .heading {
    font-size:1.8rem;
    padding-bottom:.4rem;
    color:#333333
  }
  .subheading {
    font-size:1.1rem;
    padding-bottom:1rem;
    color:#333333;
  }
  .paymentImage {
    width:146px;
    height:132px;
  }
}

.spinner {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 5px auto;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* background-color: #333; */
  background-color: #41a8dd;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.loadingText {
  font-size:1rem;
  color:#333333;
  text-align:center;
}

/* .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 1px;
  width: 25px;
} */

@media only screen and (min-width: 1400px) {
  .online-pay-off {
    max-width: 18rem;
  }
}
`;

export const RadioInActive = styled.span`
  background-color:#f7f7f7;
  height: ${props => props.size ? `${props.size}px` : '1.6rem'};
  width: ${props => props.size ? `${props.size}px` : '1.6rem'};
  display:inline-block;
  border-radius: ${props => props.size ? `${props.size}px` : '50%'};
  border: 1px solid ${({ customColor }) => customColor || '#b2afaf'};
  margin-right: 10px;
`;

export function RadioActive({sizeOuter, sizeInner, customColor}) {
  return (
    <RadioActiveOuter sizeOuter={sizeOuter} customColor={customColor}>
      <RadioActiveInner sizeInner={sizeInner} customColor={customColor} />
    </RadioActiveOuter>
  );
}

const RadioActiveOuter = styled.span`
  background-color: #f7f7f7;
  height: ${props => props.sizeOuter ? `${props.sizeOuter}px` : '1.2rem'};
  width: ${props => props.sizeOuter ? `${props.sizeOuter}px` : '1.2rem'};
  display:inline-flex;
  border-radius: ${props => props.sizeOuter ? `${props.sizeOuter}px` : '50%'};
  border: 1px solid ${({ customColor }) => customColor || '#41a8dd'};
  margin-right: 10px;
  justify-content:center;
  align-items:center;
`;

const RadioActiveInner = styled.span`
  height: ${props => props.sizeInner ? `${props.sizeInner}px` : '68%'};
  width: ${props => props.sizeInner ? `${props.sizeInner}px` : '70%'};
  display: inline-block;
  border-radius: ${props => props.sizeInner ? `${props.sizeInner}px` : '1em'};
  background-color: ${props => props.customColor || '#41a8dd'};
`;
