import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { nth, propOr, compose } from 'ramda';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Formik, FieldArray } from 'formik';
import FormikField from 'shared/components/Formik/Input';
import Card from 'shared/components/Formik/Card';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import ErrorFocus from './ErrorFocus';
import validationSchema, { makeValidatePincode, makeValidateTelephone } from './validationSchema';
import Logic from './Logic';
import { ADDRESS_LINE_LIMIT } from 'utils/constants'

export default function ShippingForm(props) {
  useEffect(() => () => { window.validateCheckoutForm = noop; });
  const {
    open,
    sendValues,
    initialValues,
    setValid = noop,
    setPhone = noop,
    validateForm,
    checkError,
    setCheckError,
    lsAddressData
  } = props;
  window.validateCheckoutForm = validateForm;
  const initialData = lsAddressData ? lsAddressData : initialValues;
  const [initialVal, setInitialVal] = useState(initialData);
  return (
    <Fragment>
      {open &&
        <Formik
          initialValues={{ ...initialVal, country_id: 'IN' }}
          validationSchema={validationSchema}
        >
          {formikProps => <Form {...formikProps} initialVal={initialVal}
            setInitialVal={setInitialVal}
            sendValues={sendValues}
            setValid={setValid}
            setPhone={setPhone}
            checkError={checkError}
            setCheckError={setCheckError}
            />
          }
        </Formik>
      }
    </Fragment>
  );
}

const Form = ({
  values,
  handleSubmit = noop,
  sendValues,
  setValid,
  setPhone,
  errors,
  initialVal,
  initialValues,
  dirty,
  touched,
  setStatus,
  status = false,
  isValid = false,
  validateForm,
  checkError,
  setCheckError,
  setInitialVal,
  setFieldValue,
}) => {
  const [saveAddress, setSaveAddress] = useState(!initialVal.default_shipping);
  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        onChange={() => {
          setValid(false);
        }}
        autoComplete="disabled"
      >
        <input autoComplete="disabled" name="hidden" type="text" style={{ display: 'none' }}></input>
        <Card>
          <Grid fluid>
            <Row>
              <Col  style ={{paddingRight:'0.4rem'}} xs={6}>
                <FormikField label="First Name*" placeholder="First Name" name="firstname" type="text" required />
              </Col>
              <Col style ={{paddingLeft:'0.4rem'}} xs={6}>
                <FormikField label="Last Name*" placeholder="Last Name" name="lastname" type="text" required />
              </Col>
              <Col style ={{paddingRight:'0.4rem'}} xs={6}>
                <FormikField 
                  label="Mobile*" 
                  placeholder="Mobile" 
                  name="telephone" 
                  type="tel" 
                  inputMode="tel"
                 //validate={makeValidateTelephone(values.telephone, setStatus, setFieldValue)}
                  prefix="+91" 
                  ignorePrefix 
                  required
                />
              </Col>
              <Col style ={{paddingLeft:'0.4rem'}} xs={6}>
                <FormikField label="Email*" placeholder="Email" name="email" type="email" required />
              </Col>
              <Col style ={{paddingRight:'0.8rem'}} xs={4}>
                <FormikField 
                  label="PIN Code*" 
                  validate={makeValidatePincode(String(values.postcode).length === 6 && values.postcode, setStatus, setInitialVal, setFieldValue)} 
                  placeholder="Pincode" 
                  name="postcode"
                  type="text"
                  inputMode="tel"
                  required
              />
              </Col>
              <Col xs={4}>
                <FormikField label="City / District*" placeholder="City / District" name="city" type="text" autoComplete="text" required />
              </Col>
              <Col  style ={{paddingLeft:'0.8rem'}} xs={4}>
                <FormikField label="State*" placeholder="State" name="region" type="text" autoComplete="text" required />
              </Col>
              <FieldArray
                name="street"
                render={() => (
                  <Fragment>
                    {
                      propOr([], 'street', values).slice(0,1).map((street, index) => (
                        <Col key={`street.${index * 1}`} xs={12}>
                          <FormikField
                            arrayError={compose(
                              Boolean,
                              nth(index),
                              propOr([], 'street'),
                            )(touched) && errors.street && errors.street[index]}
                            maxLength={ADDRESS_LINE_LIMIT}
                            label={getLabel(index)}
                            placeholder={getPlaceholder(index)}
                            name={`street.${index}`}
                            type="text"
                            required={!index}
                          />
                        </Col>
                      ))
                    }
                  </Fragment>
                )}
              />
            </Row>
          </Grid>
        </Card>
        <ErrorFocus checkError={checkError} setCheckError={setCheckError} />
      </form>
      <Logic
        values={values}
        setPhone={setPhone}
        sendValues={sendValues}
        saveAddress={saveAddress}
        validateForm={validateForm}
        isValid={isValid}
        status={status}
        setValid={setValid}
        initialValues={initialVal}
        setInitialVal={setInitialVal}
      />
    </Fragment>
  );
};

ShippingForm.propTypes = {
  onSubmit: PropTypes.func,
};

ShippingForm.defaultProps = {
  onSubmit: noop,
};

const getLabel = (index) => {
  return ( 
    index === 0 ? 
     'Address (House No, Building, Street, Area) *'
   : 
     'Address 2 (Locality, Town)'
  )
};

const getPlaceholder = (index) => {
  return (
    index === 0 ?
      'Address (House No, Building, Street, Area) *'
    :
      'Locality / Town'
  )
};
