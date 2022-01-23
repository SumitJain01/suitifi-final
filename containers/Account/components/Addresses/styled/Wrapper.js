import styled from 'styled-components';
import { darken } from 'polished';
import ConfirmModal from 'containers/Account/components/ConfirmModal';
import AddressEditor from '../components/AddressEditor';

export default styled.div`
  margin-left: -4px;
  margin-right: -4px;
  width: 100%;

  .section-header {
    font-size: 1.25rem;
    line-height: 1em;
    margin: 0 0 15px 0;
    color: ${props => props.theme.general.themeFontBlack};
  }

  .home-icon{
    margin-right: 0.3rem;
  }
  
  .address-items-container {
    margin-top: 0.75rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    justify-content: flex-start;
  }

  ${ConfirmModal} {
    .cancel-btn, .confirm-btn {
      padding: 0.5rem 1rem;
      width: 8rem;
    }
  }
  
  ${AddressEditor} {
    width: 100%;
  }
  
  .edit-save-btn {
    margin-top: 1rem;
    padding: 0px;
    width: 14em;
    font-family: Roboto, sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 3em;
    letter-spacing: 0px;
    border-radius: 5px;
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;

    &:hover, &:active {
      color: #fff;
      background: ${props => darken(0.15, props.theme.general.primaryColor)};
    }
  }
`;
