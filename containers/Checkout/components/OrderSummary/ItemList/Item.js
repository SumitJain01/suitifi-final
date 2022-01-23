import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.div`
  position: relative;
  font-family: Roboto, sans-serif;

  & {
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.smoke};
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }

  .Product_Image_Container {
    & img {
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      max-width: 100px;
    }
  }

  .Product_Image_Container_OOS{
   
   // background: transparent url('img/Group 10435.png') 0% 0% no-repeat padding-box;
    position: relative;
    & img {
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      max-width: 100px;
      opacity:0.6;
    }
    .out-of-stock-image{
      position: absolute;
     z-index:1; 
     opacity:0.8;
     bottom:40%;
     
  }
  }

  .CartItem_Content {
    padding-left: 1.25rem;
    display: flex;
    flex: 1;
    align-self: stretch;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .CartItem_Title {
    color: ${props => props.theme.general.themeFontBlack};
    font-size: 0.9rem;
    line-height: 1.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .CartItem_Title a{
    color: ${props => props.theme.general.themeFontBlack};
    font-size: 0.9rem;
    line-height: 1.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .price-container {
    flex: 2;
    align-content: center;

    .price:not(.slashed) {
      font-size: 1rem;
    }

    .price_discount {
      font-size: 0.95rem;
    }
  }

  /* For medium sized mobile screens */
  @media only screen and (min-width: 320px) {
    .Product_Image_Container {
      & img {
        width: 75px;
        height: 75px;
      }
    }
    .Product_Image_Container_OOS{
      & img {
        width: 75px;
        height: 75px;
      }
      .out-of-stock-image{
      position: absolute; 
      max-width:75px;
      z-index:1; 
      opacity:0.8;
      bottom:40%;
     
  }
    }
  }

  /* Phone with bigger screens */
  @media only screen and (min-width: 450px) {
    .Product_Image_Container {
      & img {
        width: 85px;
        height: 85px;
      }
    }
    .Product_Image_Container_OOS{
      & img {
        width: 85px;
        height: 85px;
      }
      .out-of-stock-image{
      position: absolute;
      max-width:85px;
      z-index:1; 
      opacity:0.8;
      bottom:40%;
     
  }
    }
  }
`;

