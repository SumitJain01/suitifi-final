import styled from 'styled-components';
import MenuItem from './MenuItem';

export default styled.div`
  font-family: Roboto, sans-serif;
  
  .manage-box-wrapper {
    margin: 1rem;
    padding: 1rem 1.25rem 1.5rem 1.5rem;
    border: 1px solid ${props => props.theme.colors.smoke};
    border-radius: 5px;
    /* width: 1200px; */
  }
  
  .view-links-wrapper {
    margin-top: 1rem;
    display: flex;
  }
  
  .view-links {
    margin-right: 1.25rem;
    min-width: 200px;
    align-self: flex-start;
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    
    ${MenuItem}:first-of-type::before {
      border-top-left-radius: 5px;
    }
    ${MenuItem}:not(:last-child) {
      border-bottom: 1px solid #DBDBDB;
    }
  }
  
  .active-view {
    flex-grow: 1;
  }
`;
