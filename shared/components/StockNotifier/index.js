import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import Button from 'shared/components/Button';
import * as globalActionCreators from 'containers/Global/redux/actions';

import StockNotifierForm from './StockNotifierForm';

const StockNotifier = ({ productData, openModal, isMobile }) => (
  <Button
    style={{ width: '100%'}}
    className="notify_me"
    onClick={() =>
      openModal({
        content: <StockNotifierForm productData={productData} isMobile={isMobile} />,
      })
    }
  >
      Notify Me
  </Button>
);

const mapDispatchToProps = dispatch => bindActionCreators(pick(['openModal'], globalActionCreators), dispatch);

export default connect(null, mapDispatchToProps)(StockNotifier);
