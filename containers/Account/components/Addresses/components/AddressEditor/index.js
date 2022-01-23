import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FieldArray, Formik } from 'formik';
import { propOr } from 'ramda';
import FormikField from 'shared/components/Formik/Input';
import { Row, Col } from 'react-styled-flexboxgrid';
import validationSchema, { makeValidatePincode } from './validationSchema';
import Wrapper from './AddressEditor_Wrapper';

const getLabel = (index) => {
  if (index === 0) {
    return 'Address 1 (House No, Building, Street, Area)*';
  } else if (index === 1) {
    return 'Address 2 (Locality, Town)';
  }
  return null;
};

const getPlaceholder = (index) => {
  if (index === 0) {
    return 'Address (House No, Building, Street, Area)*';
  } else if (index === 1) {
    return 'Locality / Town';
  }
  return null;
};

function AddressEditor({
  initialValues,
  closeHandler,
  editAddress,
  formikRef,
  className,
}) {
  return (
    <Wrapper className={className}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          editAddress(values);
          setSubmitting(false);
          closeHandler && closeHandler();
        }}
        innerRef={formikRef ? formikRef : null}
      >
        {({
          isValid,
          touched,
          handleSubmit,
          isSubmitting,
          values,
          setFieldValue
        /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs={6}>
                <FormikField label="First Name*" placeholder="First Name" name="firstname" type="text" required
                newDesignFlag={true} />
              </Col>
              <Col xs={6}>
                <FormikField label="Last Name*" placeholder="Last Name" name="lastname" type="text" required
                newDesignFlag={true} />
              </Col>
              <Col xs={12}>
                <FormikField label="Mobile*" placeholder="Mobile" name="telephone" type="text" required
                newDesignFlag={true} />
              </Col>
              <Col xs={4}>
                <FormikField label="PIN Code*" placeholder="Pincode" name="postcode" type="text" required
                validate={makeValidatePincode(String(values.postcode).length === 6 && values.postcode,setFieldValue)}
                newDesignFlag={true} />
              </Col>
              <Col xs={4}>
                <FormikField label="City / District*" placeholder="City / District" name="city" type="text" required newDesignFlag={true} />
              </Col>
              <Col xs={4}>
                <FormikField label="State*" placeholder="State" name="region" type="text" required newDesignFlag={true} />
              </Col>
              <FieldArray
                name="street"
                render={() => (<Fragment>
                  {
                    propOr([], 'street', values).map((street, index) => (
                      <Col key={`street.${index}`} xs={12}>
                        <FormikField label={getLabel(index)} placeholder={getPlaceholder(index)} name={`street.${index}`} type="text" required newDesignFlag={true} />
                      </Col>
                    ))
                  }
                </Fragment>)
                }
              />
            </Row>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default styled(AddressEditor)``;
