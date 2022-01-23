import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import LoginCTAButton from '../../styled/LoginCTAButton';

function RetryTimer({
  generateOTPRequest,
}) {
  const [seconds, setSeconds] = useState(process.env.NODE_ENV.includes('dev') ? 5 : 60);
  // timer logic
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1;
        }
        clearInterval(interval);
        interval = false;
        return 0;
      });
    }, 1000);

    // cleanup
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const clickHandler = useCallback(() => {
    generateOTPRequest({ retainPreviousSessionId: true });
  });
  return (
    <Fragment>
      {seconds > 0 ?
        <ResendButton1
          fullWidth
          minimal
          style={{ textDecoration: 'none', cursor: 'wait' }}>
          Resend OTP in {' '}<span className="timer">00:{`0${seconds}`.slice(-2)}</span>
        </ResendButton1>
        :
        <ResendButton2 fullWidth minimal onClick={clickHandler}>
          Resend OTP
        </ResendButton2>
      }
    </Fragment>
  );
}

const ResendButton1 = styled.div`
  text-align: end;
  color: #989898;
  font-size: 0.8rem;
  .timer {
    color: #5c5c5c;
    font-size: 1rem;
  }
`;

const ResendButton2 = styled.div`
  text-align: end;
  color: #00afef;
  font-weight:500;
`;

export default RetryTimer;
