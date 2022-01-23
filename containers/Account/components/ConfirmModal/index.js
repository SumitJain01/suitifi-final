import React, { Fragment } from 'react';
import styled from 'styled-components';
import { cover } from 'polished';
import NoScroll from 'shared/components/ScrollLock';

function ConfirmModal({ message, cancelMessage, confirmMessage, confirmHandler, cancelHandler, className }) {
  return (
    <Fragment>
      <Overlay open onClick={() => cancelHandler()} />
      <NoScroll />
      {
        open &&
        <Modal className={className || ''}>
          <div className="content">
            <p className="message">
              {message}
            </p>
            <button className="cancel-btn" onClick={() => cancelHandler()}>
              {cancelMessage || 'No'}
            </button>
            <button className="confirm-btn" onClick={() => confirmHandler()}>
              {confirmMessage || 'Yes'}
            </button>
          </div>
        </Modal>
      }
    </Fragment>
  );
};

export default styled(ConfirmModal)``;

const Modal = styled.div`
  z-index: 100;
  pointer-events: none;
  ${cover()}
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .content {
    padding: 1.25rem;
    pointer-events: all;
    max-width: 60%;
    border-radius: 10px;
    background-color: white;
    text-align: center;
    
    .message {
      font-family: Roboto, sans-serif;
      margin-top: 0.25rem;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.4em;
      color: ${props => props.theme.general.themeFontBlack};
    }
    
    .cancel-btn, .confirm-btn {
      font-family: Roboto, sans-serif;
      padding: 0.25rem 1rem;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1.6em;
      border-radius: 5px;
      text-align: center;
    }
    .cancel-btn {
      margin-right: 1rem;
      color: ${props => props.theme.general.primaryColor};
      border: 1px solid ${props => props.theme.general.primaryColor};
      background-color: ${props => props.theme.general.lightSecondaryColor};
    }
    .confirm-btn {
      color: white;
      border: 1px solid ${props => props.theme.general.primaryColor};
      background-color: ${props => props.theme.general.primaryColor};
    }

    @media (min-width: 768px) {
      padding: 1.25rem 3rem;
      max-width: 30%;
      
      .message {
        font-size: 1rem;
      }
      
      .cancel-btn, .confirm-btn {
        font-size: 0.9rem;
        line-height: 1.6em;
        text-transform: uppercase;
      }
    }
  }
`;

const Overlay = styled.div`
  z-index: 99;
  ${cover()}
  position: fixed;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? 0.8 : 0};
  transition: opacity 0.2s ease;
  background-color: #000000BD;
`;

