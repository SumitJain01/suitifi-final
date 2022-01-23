import styled from 'styled-components';

const MenuItem = styled.div`
  padding: 0.75rem 1rem;
  width: 100%;
  display: flex;
  cursor: ${'pointer'};
  pointer-events: ${'all'};
  font-size: 0.95rem;
  text-align: left;
  background: ${props => props.active ? props.theme.general.lightSecondaryColor : 'transparent'};
  color: ${props => props.active ? props.theme.general.primaryColor : props.theme.general.themeFontBlack};
  position: relative;
  transition: all 0.3s;
  
  :hover,
  :active {
    background-color: ${({ theme }) => theme.general.lightSecondaryColor};
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5px;
    height: 100%;
    background : ${props => (props.active) ? props.theme.general.primaryColor : 'transparent'};
  }
  
  .icon-container {
    width: 2rem;
    
    .manage-ac-icon {
      .path-selector {
        color: ${props => (props.active) ? props.theme.general.primaryColor : '#989898'};
      }
      .purse, .logout ,.user-icon{
        fill: ${props => (props.active) ? props.theme.general.primaryColor : '#989898'};
      }
    }
  }
`;

export default MenuItem;
