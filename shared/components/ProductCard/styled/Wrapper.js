import styled from 'styled-components';
export default styled.div`
  list-style-type: none;
  position: relative;
  background : white;
  & > div {
    position: relative;
  }
  border: 0.12rem solid rgb(220,220,220);
  text-align: center;
  margin: 0.5rem;
  height: max-content;
  box-shadow: 0px 0px 12px rgba(39, 153, 137, 0.05);
  border-radius: 5px;
  transition: all 0.3s;
  .title {
    @media only screen and (max-width: 767px) {
      font-weight: bold;
    }
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1rem;
    margin-bottom: 6px;
    min-height: 3rem;
    font-weight: 400;
    padding: 0 0.8em;
    margin: 0.5em 0 0;
    color: ${({ theme }) => theme.general.themeFontBlack};
  }
  @media only screen and (max-width: 767px) {
    margin: 0rem 0.2rem;
    box-shadow: 0px 0px 8px rgba(0, 155, 0, 0.06);
  }
  .notify-me-mobileButton {
    @media only screen and (max-width: 767px){
    margin: -0.8rem -0.75rem;
    }
  }
  .addTocart_mobile {
    color: ${({ theme }) => theme.general.primaryColor};
    font-size: 0.9rem;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
  .addTocart_desktop {
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  .tagsName {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: auto;
    .tag {
      left: 0.5rem;
      background-color: #EF5350;
      color: #fff;
      line-height: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      text-align: left;
      border-radius: 5px 0px;
    }
    .out-of-stock {
      background-color: #333;
    }
  }
  i {
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.scheme.accent};
  }
  .review-count {
    background-color: #6da523;
    color: #ffffff;
    padding: 0.2em 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: bottom;
    font-size: 0.8rem;
    width: 30%;
    margin: auto;
    border-radius: 5px;
    .star-icon {
      width: 0.8em;
      height: 0.8em;
      display: flex;
      margin-left: 0.2em;
    }
  }
  .price_margin {
    @media only screen and (max-width: 768px){
      margin:0rem;
    }
    margin: 0.5em 0 0.6em;
    padding: 0 0.8em;
    min-height: 2.5rem;
  }
  .price {
    color: #1d1d1d;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 3px;
    margin-top: 6px;
    &.slashed {
      margin-top: 6px;
      text-decoration: line-through;
      font-size: 0.875rem;
      /* padding: 0px 2px; */
      color: ${({ theme }) => theme.general.lightGray};
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
  .discount {
    margin-top: 6px;
    color:#ff0000;
    font-size: 0.875rem;
    font-weight: bold; 
    // border-left: 1.5px solid rgb(189, 189, 189);
    padding-left: 3px;
  }
  .ProductCard_Wrapper_DisplayArea {
    .secondary {
      display: none;
    }
    .primary {
      bottom: 0px;
      width: 4rem;
      opacity: 0.6;
      height: 3rem;
      span {
        display: none;
        :nth-child(2) {
          display: block;
          i {
            color: #fff;
          }
        }
      }
    }
  }
  .primary {
    display: flex;
    .notify_me {
      @media only screen and (max-width: 767px) {
        color: ${({ theme }) => theme.general.primaryColor};
        font-size: 0.9rem;
        background-color: white !important;
        border: solid 0.12rem rgb(0,0,0,0.15);
        border-radius: 0rem;
      };
      flex: 1;
      background-color: white;
      color: ${({ theme }) => theme.general.primaryColor};
      font-weight: bold;
      padding: 0.7rem 1rem;
      margin : 0rem 0.5rem 0.5rem 0.5rem;
      border: solid 0.12rem rgb(0,0,0,0.15) !important;
      &:hover {
        transition: background-color 0.5s ease;
        transition: color 0.5s ease;
        background-color: ${({ theme }) => theme.general.primaryColor};
        color: #ffffff;
        border-color: ${({ theme }) => theme.general.primaryColor} !important;
      }
    }
    .ProductCard_CartButton {
      @media only screen and (max-width: 767px) {
        background-color: white !important;
        border: 0.12rem solid;
        border-color: ${({ theme }) => theme.general.primaryColor};
        border-radius:4px;
      };
      flex: 1;
      background-color: white;
      border: 0.12rem solid rgb(39, 153, 137);
      border-radius: 0.25rem;
      margin: 0rem 0.5rem 0.5rem 0.5rem;
      color: ${({ theme }) => theme.general.primaryColor};
      font-weight: bold;
      padding: 0.7rem 1rem;
      &:hover {
        transition: background-color 0.5s ease;
        transition: color 0.5s ease;
        background-color: ${({ theme }) => theme.general.primaryColor};
        color: #ffffff;
        border-color: ${({ theme }) => theme.general.primaryColor};
      }
    }
  }
  &.secondary {
    position: absolute;
    right: 0.5rem;
    top: 0.8rem;
  }
  @media only screen and (max-width: 760px) and (min-width: 320px)  {
    .tag {
      font-size: 0.56rem;
      padding: 4px;
    }
  }
  @media only screen and (min-width: 767px) {
    .tag {
      left: 0.5rem;
      padding: 5px 5px;
      font-size: 0.7rem;
    }
    .ProductCard_Wrapper_DisplayArea {
      overflow: hidden;
      .primary {
        bottom: -50px;
        transition: bottom 0.4s ease-in-out;
        width: 100%;
        span {
          display: block;
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
          :nth-child(2) {
            opacity: 0;
            height: 0px;
            transition: opacity 0.4s ease-in-out;
          }
        }
      }
      &:hover .primary {
        bottom: -0px;
        transition: bottom 0.4s ease-in-out;
        &:hover {
          bottom: 0px;
          transition: bottom 0.4s ease-in-out;
          span {
            opacity: 0;
            height: 0px;
            transition: opacity 0.4s ease-in-out;
            :nth-child(2) {
              opacity: 1;
              height: 21px;
              transition: opacity 0.4s ease-in-out;
            }
          }
          i {
            color: #fff;
          }
        }
      }
    }
  }
`;