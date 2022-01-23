import styled from 'styled-components';

export default styled.div`
.number{
  font-size: 2.2rem;
  font-weight:300;
}
.text{
  font-weight:400;
  font-size: 1.5rem;
  padding-left:0.5rem;
}
.cashback{
  background:#F8F8F8;
  color: #00AFEF;
}
.flex{
  display:flex;
  align-items:center;
}
  margin: 2rem 0rem 0rem 0rem;
  font-size: 14px;
  padding: 0rem;
  font-family:Roboto , sans-serif;
 .LineItem_Details{
   color:#1D1D1D;
 }
 .box{
   border:2px solid #EAEAEA;
   border-radius:5px;
   text-align:left;
   background:#f8f8f8;
   padding:1rem;
 }
 .shipping{
  text-align: left;
   color:#5C5C5C;
   margin-bottom:0.4rem;
 }
 .heading{
    text-align: left;
    color: #1D1D1D;
    font-size: 1.1rem;
    font-weight:500 ;
    margin-top:0.5rem;
 }
 .htag{
  text-align : center;
  margin-top: 1rem;
  font-size: 1.3rem;
  line-height: 1.5rem;
 }
  .Thankyou_Title {
    color: ${({ theme }) => theme.scheme.highlight};
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .OrderOverview {
    margin-bottom : 1rem;
    padding: 1rem;
    background : #DEF5F4;
    > div {
      display: flex;
      justify-content:space-between;
      width: 100%;
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: 0.8rem;
      font-size: 1.1rem;
      line-height: 2rem;
    }
  }

  @media only screen and (max-width:768px){
    .heading {
      padding-left: 0.8rem;
    }
    .shipping {
      padding-left: 0.8rem;
    }
    .box {
      margin: 0rem 0.8rem;
    }
  }

  @media only screen and (min-width:769px) {
    .box{
      margin-right:4rem;
      margin-bottom:1rem;
    }
    .mainbox{
      border:2px solid #EAEAEA;
      border-radius:5px;
      padding:0.6rem;
      margin-bottom:1rem; 
    }
    .divider{
      display : none;
    }
    .Thankyou_Title {
      color: ${({ theme }) => theme.scheme.highlight};
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
    }

    .OrderOverview {
      display: block;
      width: 100%;
      background : #DEF5F4;
      
      > div {
        display: inline-block;
        width: 25%;
        text-align: center;
        vertical-align: top;
        color: ${({ theme }) => theme.colors.darkGray};

        span {
          display: block;
          width: 100%;
        }
      }
    }
    .order{
     display:flex;
     align-items:center;
     padding : 0.1rem !important; 
     margin-right:4rem;   
    }
    .details{
      padding:0.4rem 0rem !important;
    }
  }

  span.separator {
    border-bottom: 1px solid rgba(169, 169, 169, 0.4)
  }
 
  .row {
      padding: 0.5rem 0.85rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      
      div:nth-child(1) {
        font-size: 14px;
        color: #5C5C5C;
      }
      div:nth-child(2) {
        font-size: 14px;
        font-weight: 500;
      }

      div.big {
        font-size: 16px;
      }

      div.total {
        font-size: 1.4rem;
        font-weight:500;
        color:#1D1D1D;
      }
    }
    
`;
