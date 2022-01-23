import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Formik } from 'formik';
import Button from 'shared/components/Button';
import FormikField from 'shared/components/Formik/Input';
import H3 from 'shared/components/Html/H3';

import Wrapper from './Wrapper';
import validationSchema from './validationSchema.js';

export default function OTPLogin({
  submitForm,
}) {
  return (
    <Wrapper>
      <Row>
        <Col xs={12}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ contact: '' }}
            onSubmit={(values, { setSubmitting }) => {
              submitForm(values);
              setSubmitting(false);
            }}
          >
            {({
              touched,
              handleSubmit,
              isSubmitting,
              isValid,
            }) => (
                <form onSubmit={handleSubmit}>
                  <H3>Please enter 10 digit mobile number to continue</H3>
                  <FormikField autoComplete="off" type="text" placeholder="Enter Phone" name="contact" />
                  <Button fullWidth center type="submit" disabled={!isValid || !touched || isSubmitting}>
                    LOGIN WITH OTP
                </Button>
                </form>
              )}
          </Formik>
        </Col>
      </Row>
    </Wrapper>
  );
}
