import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLoggedIn,
  makeSelectUser,
} from 'containers/Auth/redux/selectors';

function StateController({ isLoggedIn, children }) {
  // step 0 denotes login and 1 denotes address entry stage
  const [currentUIStep, setCurrentUIStep] = useState(1);
  const setCurrentStep = useCallback(step => setCurrentUIStep(step), []);

  useEffect(() => {
    if (isLoggedIn) {
      setCurrentUIStep(1);
    }
  }, [isLoggedIn]);

  return React.cloneElement(children, { currentUIStep, setCurrentStep });
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isLoggedIn: makeSelectLoggedIn(),
});

export default connect(mapStateToProps)(StateController);
