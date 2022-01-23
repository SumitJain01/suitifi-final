import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { isNonEmptyString } from 'ramda-adjunct';
import Select from 'react-select';
import { Row } from 'react-styled-flexboxgrid';
import { lighten } from 'polished';
import detectMobile from 'utils/helpers/mobileDetect';
import Button from 'shared/components/Button';
import NoScroll from 'shared/components/ScrollLock';
import BounceSpinner from 'shared/components/Spinner/bounceSpinner';
import Overlay from 'shared/components/Overlay';
import MShouldCancelModal from './MShouldCancelModal';
import { OrderCancellationReasons } from 'utils/constants';

export default ShouldCancelModal;

function ShouldCancelModal({ cancelHandler, setModalOpen, setLoadingIndex }) {
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [reason, setReason] = useState(null);
  const [error, setError] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [reasonDesc, setReasonDesc] = useState('');
  const isMobile = detectMobile();
  const isSubmitDisabled =
    !isNonEmptyString(reason) ||
    (reason === 'Others' && !isNonEmptyString(reasonDesc)) ||
    disabled ||
    error;

  const closeModal = () => {
    setModalOpen(false);
    setLoadingIndex(-1);
    setShowCancelConfirmation(false);
    setReason(null);
    setError(false);
  };
  
  const setSelected = (reason) => {
    setReason(reason.value);
    setReasonDesc('');
    setError(false);
  }
  
  const submitHandler = () => {
    if (!reason) {
      setError(true);
      return;
    }
    setDisabled(true);
    cancelHandler(reason, reasonDesc);
  };
  
  if (isMobile) {
    const propsObj = {
      OrderCancellationReasons,
      setSelected,
      submitHandler,
      closeModal,
      reason,
      reasonDesc,
      setReasonDesc,
      isSure, setIsSure,
      error, disabled,
      isSubmitDisabled
    };
    return <MShouldCancelModal {...propsObj} />;
  }

  return (
    <DesktopWrapper>
      <Overlay open zIndex={100}></Overlay>
      <NoScroll />
      <div className={`modal_style ${isSure && 'reason-modal'}`}>
        {isSure && (
          <div>
            <h2 className="sub-h2">Your complete order will be cancelled</h2>
            <div className="input-box issue-type">
              <div className="label">Select Issue Type</div>
              <CustomSelect
                options={OrderCancellationReasons}
                onChange={selectedOption => setSelected(selectedOption)}
                classNamePrefix="rs"
              />
            </div>
            {reason === 'Others' && (
            <div className="input-box reason-explanation issue-type">
              <div className="label">Reason</div>
              <div><textarea name="reasonDesc" cols="2" rows="3" style={{resize : 'none', border: 'none'}} value={reasonDesc} onChange={e => setReasonDesc(e.target.value)}/></div>
            </div>)}

          {error && <div style={{ color: 'red' }}>Please Select a Reason</div>}
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
            }}
          >              
            <CustomButton
              onClick={closeModal}
              style={{ color: '#00AFEF', backgroundColor: '#fff' }}
            >
              Cancel
            </CustomButton>
            <CustomButton
              onClick={submitHandler}
              disabled={isSubmitDisabled}
              style = {{ marginLeft: 20 }}
            >
              Cancel Order
            </CustomButton>
          </div>
          </div>
        )}
        {!isSure && (<Fragment>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}
            >
              <div className="sure-q-1">ARE YOU SURE ?</div>
              <div className="sure-q-2">Your complete order will be cancelled</div>
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Row>
                <CustomButton
                  disabled={disabled}
                  onClick={() => {
                    setIsSure(true);
                  }}
                  style={{color: '#00AFEF', backgroundColor: '#fff'}}
                >
                  Yes
                </CustomButton>
                <CustomButton
                  onClick={closeModal}
                  style={{ marginLeft: 20 }}
                >
                  No
                </CustomButton>
              </Row>
            </div>
          </Fragment>)}
        {disabled && <BounceSpinner></BounceSpinner>}
      </div>
    </DesktopWrapper>
  );
}

const CustomSelect = styled(Select)`
  .rs__control {
    border-width: 0;
  }
  .rs__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .rs__indicator-separator {
    display: none;
  }
  .rs__dropdown-indicator {
    color: ${props => props.theme.general.primaryColor};
  }
`;

const CustomButton = styled(Button)`
  padding: 0.6rem 2rem;
  background-color: ${props => props.theme.general.primaryColor};
  color: #fff;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.general.primaryColor};
  font-weight: bolder;
  font-size: 1rem;
  letter-spacing: 0;
  
  :disabled {
    background-color: ${props =>
      lighten(0.15, props.theme.general.primaryColor)};
  }
`;


const DesktopWrapper = styled.div`
  padding: 12px 16px;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.general.lightBg};
  .modal_style {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1001;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem 4rem;
    /* overflow-x: hidden; */
    transform: translate(-50%, -50%);
    
    &.reason-modal {
      padding: 1rem 1rem 2rem;
      
      > div {
        margin-top: 0.5rem;
        width: 30vw;
      }
      
      .sub-h2 {
        font-size: 1.1rem;
      }
    }
  }
  .cross_button {
    position: fixed;
    top: 22vh;
    right: 27vw;
    z-index: 1002;
    cursor: pointer;
  }
  
  .sub-h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: ${props => props.theme.general.themeFontBlack};
  }
  .input-box {
    padding: 0.5rem 1rem;
    border: 1px solid ${props => props.theme.colors.smoke};
    border-radius: 5px;
    margin: 5px;
    
    .label {
      font-size: 0.8rem;
    }
  }
  
  .issue-type {
    .label::after {
      content: '*';
      color: #f00;
    }
  }
  
  .sure-q-1 {
    color: ${props => props.theme.colors.themePlaceholderGray};
  }
  .sure-q-2 {
    color: ${props => props.theme.general.themeFontBlack};
  }
`;
