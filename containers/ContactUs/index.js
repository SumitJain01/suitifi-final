import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeUTMParams } from 'containers/Checkout/redux/selectors';
import ContactUsPage from 'containers/ContactUs/components/ContactUsPage';

function ContactUsContainer(props) {
  return (
    <ContactUsPage {...props} />
  );
}
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  trackingData: makeUTMParams(),
})

export default connect(mapStateToProps, null)(ContactUsContainer);
