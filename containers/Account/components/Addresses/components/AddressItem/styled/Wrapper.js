import styled from 'styled-components';

export default styled.div`
  padding: 1rem 0.9rem 0.75rem 1.2rem;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  
  .pin-icon {
    margin-right: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .name{
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-transform: capitalize;
  }
  
  address, .phone-number {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.1rem;
    color: ${props => props.theme.colors.mediumGray};
  }

  address {
    font-style: normal;
    margin-top: 0.5rem;
  }
  
  .phone-number {
    margin-top: 0.25rem;
    font-weight: 400;
  }
  
  .action-buttons {
    margin-top: 0.5rem;
    line-height: 1em;

    button {
      padding: 0px;
      color: ${props => props.theme.general.primaryColor};
      font-family: Roboto, sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1em;
      letter-spacing: 0.25px;
      text-transform: uppercase;
    }
    button.delete {
      transform: translateX(75%);
    }
  }
`;
