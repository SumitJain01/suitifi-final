import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { lighten } from 'polished';
import BottomSheet from 'shared/components/BottomSheet';
import MemoListMobile from 'shared/components/SVGIcons/ListMobile';
import MemoEditMobile from 'shared/components/SVGIcons/EditMobile';
import Overlay from 'shared/components/Overlay';
import NoScroll from 'shared/components/ScrollLock';

export default function MShouldCancelModal(props) {
  const {
    OrderCancellationReasons,
    setSelected,
    submitHandler,
    closeModal,
    isSure,
    setIsSure,
    reason,
    reasonDesc,
    setReasonDesc,
    error,
    disabled,
    isSubmitDisabled,
  } = props;

  return (
    <MobileWrapper>
      <Overlay open></Overlay>
      <NoScroll />

      <BottomSheet headerText="Cancel Order" closeHandler={closeModal}>
        {!isSure && <MakeSure yes={() => setIsSure(true)} no={closeModal} />}
        {isSure && (
          <SubmitReason
            optionsArray={OrderCancellationReasons}
            setSelected={setSelected}
            submitHandler={submitHandler}
            reason={reason}
            reasonDesc={reasonDesc}
            setReasonDesc={setReasonDesc}
            disabled={disabled}
            error={error}
            isSubmitDisabled={isSubmitDisabled}
          />
        )}
      </BottomSheet>
    </MobileWrapper>
  );
}

function MakeSure({ yes, no }) {
  return (
    <SureWrapper>
      <div className="content">
        <h2 style={{ fontSize: '1.1rem', fontWeight: '500' }}>Are you sure?</h2>
        <p style={{ fontSize: '1.1rem', fontWeight: '400' }}>
          Your complete order will be cancelled
        </p>
      </div>
      <SureCTA>
        <button onClick={yes} className="btn-confirm-cancel">
          Yes
        </button>
        <button onClick={no} className="btn-close-cancel">
          No
        </button>
      </SureCTA>
    </SureWrapper>
  );
}

function SubmitReason({
  optionsArray,
  reason,
  setSelected,
  submitHandler,
  reasonDesc,
  setReasonDesc,
  error,
  disabled,
  isSubmitDisabled,
}) {

  return (
    <ReasonWrapper>
      <div className="content">
        <div className="area label-cotnainer">
          <div className="empty-space"></div>
          <div className="label">Select Issue Type*</div>
        </div>
        <div className="area dropdown-container">
          <div className="icon-space">
            <MemoListMobile />
          </div>
          <CustomSelect
            options={optionsArray}
            onChange={selectedOption => setSelected(selectedOption)}
            menuPlacement="auto"
            menuPosition="fixed"
            classNamePrefix="rs"
            isSearchable={false}
            inputProps={{ readOnly: true }}
          />
        </div>
        {reason === 'Others' && (
          <div className="input-box">
            <div className="label">
              Please tell the reason for cancellation*
            </div>
            <div className="reason-explanation">
              <div className="icon-space">
                <MemoEditMobile />
              </div>
              <div style={{ width: '100%' }}>
                <textarea
                  className="text-area"
                  name="reasonDesc"
                  style={{ resize: 'none' }}
                  value={reasonDesc}
                  onChange={e => setReasonDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <ReasonCTA>
        <button
          disabled={isSubmitDisabled}
          onClick={submitHandler}
          className="btn-submit-reason"
        >
          CANCEL ORDER
        </button>
      </ReasonCTA>
    </ReasonWrapper>
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

const SureCTA = styled.div`
  display: flex;

  .btn-confirm-cancel,
  .btn-close-cancel {
    padding: 1rem;
    flex: 1;
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: 0px 0px 8px #00000029;
  }

  .btn-confirm-cancel {
    background-color: #fff;
    color: ${props => props.theme.general.primaryColor};
  }

  .btn-close-cancel {
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;
  }
`;

const SureWrapper = styled.div`
  background-color: #fff;

  .content {
    margin: 0 1rem;

    h2,
    p {
      margin: 0;
    }
    h2 {
      padding: 0.75rem 0 1rem;
      font-size: 0.95rem;
      font-weight: 400;
      color: ${props => props.theme.colors.silver};
    }
    p {
      font-size: 1rem;
      color: ${props => props.theme.general.themeFontBlack};
    }
  }

  ${SureCTA} {
    margin-top: 2.5rem;
  }
`;

const ReasonCTA = styled.div`
  display: flex;
  text-align: center;

  .btn-submit-reason {
    padding: 1rem 0px;
    font-weight: 500;
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;
    flex: 1;

    :disabled {
      background-color: ${props =>
        lighten(0.15, props.theme.general.primaryColor)};
    }
  }
`;

const ReasonWrapper = styled.div`
  background-color: #fff;

  ${ReasonCTA} {
    margin-top: 2.5rem;
  }

  .content {
    margin: 0 1rem;
  }

  .input-box {
    padding: 1rem 0 0;
  }

  .area {
    display: grid;
    grid-template-columns: 2rem 1fr;
  }

  .label {
    margin: 20px 0px;
    color: ${props => props.theme.colors.themePlaceholderGray};
  }

  .icon-space {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown-container {
    border-bottom: 1px solid ${props => props.theme.colors.smoke};
  }
  .text-area {
    width: 95%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #eaeaea;
  }
  .reason-explanation {
    display: flex;
    flex-direction: row;
  }
`;

const MobileWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;
