import React from 'react';
import styled from 'styled-components';
import CloseIcon from 'shared/components/SVGIcons/CheckoutMobileCloseModal';

export default BottomSheet;

function BottomSheet({ headerText, closeHandler, children }) {
  return (
    <Wrapper className="bs-wrapper">
      {headerText && (
        <Header className="bs-header">
          {headerText}
          {(closeHandler) && (
            <div className="close-icon-wrapper" onClick={closeHandler}>
              <CloseIcon />
            </div>
          )}
        </Header>
      )}
      {children}
    </Wrapper>
  );
}

const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${props => props.theme.general.themeLightGreen};
  
  font-size: 1.2rem;
  font-weight: 700;
  color: #3B3B3B;
  
  .close-icon-wrapper {
    padding: 5px;
    border: 1px solid ${props => props.theme.general.primaryColor};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
  }
`;

const Wrapper = styled.div`
  background-color: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1001;
`;
