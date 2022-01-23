import styled from 'styled-components';

export default styled.div`
  margin-left: -4px;
  margin-right: -4px;
  width: 100%;
  
  .header-row {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
    
    .header-title, .reset-btn {
      font-family: Roboto, sans-serif;
      font-weight: 500;
      line-height: 2rem;
      color: ${props => props.theme.general.primaryColor};
    }
    
    .header-title {
      font-size: 1.086rem;
    }

    .reset-btn {
      padding: 0;
      font-size: 0.8571rem;
    }
  }
  
  .address-editor {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    width: auto;
  }
  
  .save-addr-wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    background-color: ${props => props.theme.general.primaryColor};
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  
  .save-addr-btn {
    font-family: Roboto, sans-serif;
    font-size: 1.286rem;
    font-weight: 500;
    line-height: 1.714rem;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;