import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Formik } from 'formik';
import Button from 'shared/components/Button';
import FormikField from 'shared/components/Formik/Input';

import Wrapper from './Wrapper';
import validationSchema from './validationSchema';

export default function OTPVerifyForm({
  submitForm,
}) {
  return (
    <Wrapper>
      <Row>
        <Col xs={12}>
          <Formik
            initialValues={{ otp: '' }}
            onSubmit={(values, { setSubmitting }) => {
              submitForm(values);
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({
              touched,
              isValid,
              handleSubmit,
              isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                  <FormikField autoComplete="off" type="text" placeholder="Enter OTP" name="otp" />
                  <Button fullWidth center type="submit" disabled={!isValid || !touched || isSubmitting}>
                    VERIFY OTP
                </Button>
                </form>
              )}
          </Formik>
        </Col>
      </Row>
    </Wrapper>
  );
}
