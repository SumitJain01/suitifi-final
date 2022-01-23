import React, { Fragment } from 'react';
import { Formik } from 'formik';

import Input from 'shared/components/Input';
import Spinner from 'shared/components/Spinner';
import Button from 'shared/components/Button';
import cogoToast from 'lib/toast';
import Gap from 'shared/components/Gap';
import Flex from 'shared/components/Flex';
import config from 'config/env';
import request from 'lib/request';

import Ratings from './Rating';

export default class ReviewForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const data = await request(`https://tdc-nd-api.honasa-staging.net/v1/products/${values.productId}/reviews`, {
              method: 'POST',
              body: JSON.stringify(values),
            });
            if (data.status) {
              cogoToast.success(data.message);
            } else {
              cogoToast.error('Please try again.');
            }
          } catch (err) {
            cogoToast.error('Please try again.');
          }
          this.props.closeModal();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          ...rest
        }) => (
          <form
            style={{
              padding: '5%', width: '60vw', maxWidth: '480px', minWidth: '300px',
            }}
            onSubmit={handleSubmit}
          >
            {isSubmitting
              ? <Flex style={{ width: '100%' }} justify="center"><Spinner /></Flex>
              : (<Fragment>
                <span style={{ fontSize: '15px' }}>Submit Review</span>
                <Gap h="6px" />
                <Ratings update={rest.setFieldValue} />
                <Gap h="1rem" />
                <Input
                  style={{
                    marginBottom: 0, flexGrow: 1, marginRight: '4px', fontSize: 'inherit',
                  }}
                  name="name"
                  type="text"
                  label="Name"
                  required
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name && errors.name}
                />
                <Gap />
                <textarea
                  style={{
                    marginBottom: 0, width: '100%', marginRight: '4px', fontSize: 'inherit',
                  }}
                  name="message"
                  type="text"
                  label="Title"
                  required
                  placeholder="Message..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  // error={errors.message && touched.message && errors.message}
                />
                <Gap />
                <Button
                  disabled={isSubmitting}
                > Submit </Button>
              </Fragment>)
            }
          </form>

        )}
      </Formik>
    );
  }
}

