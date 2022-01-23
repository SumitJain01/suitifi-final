import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { path } from 'ramda';
import axios from 'axios';
import makeClevertap from "lib/makeClevertap";
import { authHeader } from 'lib/request';
import config from 'config/env';
import { useRouter } from 'next/router';
import cogoToast from 'lib/toast';
import { Formik, Field } from 'formik';
import validationSchema from 'utils/helpers/contactus/validationSchema';
import theme from 'theme';
import { Icon } from 'react-icons-kit';
import { youtube, instagram, pinterest, twitter } from 'shared/components/Icons';
import H1 from 'shared/components/Html/H1';
import Input from 'shared/components/Input';
import HeaderContactUs from '../HeaderContactUs';
import facebookF from 'shared/components/Icons/social/Facebook';
import Select from 'react-select';
import Gap from 'shared/components/Gap';
import Button from 'shared/components/Button';

const clevertap = makeClevertap();

const customStyle = {
  backgroundColor: theme.general.primaryColor,
  color: 'white',
  borderRadius: '5px',
  width: '100%'
}

const colourStyles = {
  container: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      border: 'none',
      borderBottom: '1px solid #81818133',
      borderRadius: '0px',
      borderShadow: 'none',
    };
  },
  control: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      border: 'none',
      borderBottom: '1px solid #81818133',
      borderRadius: '0px',
      borderShadow: 'none',
      '&:hover': {
        borderColor: '#81818133'
      }
    };
  },
};

function ContactUsPage({ className, user, addresses, trackingData }) {
  const [selectedMainOption, setselectedMainOption] = useState('');
  const [selectedOrderId, setselectedOrderId] = useState('');
  const [selectedSubOption, setselectedSubOption] = useState('');
  const [innerSubOption, setinnerSubOption] = useState('');
  const [atttachmentsName, setAttachmentsName] = useState([]);
  const [orderIds, setorderIds] = useState([]);
  const router = useRouter();

  const fetchOrderIds = async () => {
    const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/order-id/${user.id}`;
    try {
      const orders = await axios.get(requestURL, {
        headers: authHeader()
      });
      setorderIds(orders.data.map((i) => ({ value: `${i}`, label: `${i}` })));
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user.id) {
      fetchOrderIds();
    }

    clevertap.event.push("selectContactUs", {
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      pageTitle: process.browser ? document.title : "",
      clickSource: router.asPath.split("/").slice(-1)[0],
      clickTarget: "contact-us",
      clickLabel: "Contact Us",
      clickUrl: "/contact-us",
    });
  }, [])

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    if (!values.subIssue) {
      cogoToast.error('Please select sub-issue type');
      return;
    }

    if (values.cf_issue_type.label == "Order Related" &&
      !(values.subIssue.value === 'courier-dispute-feedback') &&
      !values.innerSubIssue
    ) {
      cogoToast.error('Please select sub-issue type');
      return;
    }

    var headers = {
      'content-type': 'application/json'
    }

    const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/contact-us/freshdesk`;
    let data = {};
    let issueType = path(['cf_issue_type', 'label'], values);
    let subIssueType = path(['subIssue', 'label'], values);
    let subSubIssueType = path(['innerSubIssue', 'label'], values);
    data.responder_id = 82034289868;
    data.name = values.name;
    data.email = values.email;
    data.phone = values.phone;
    data.subject = `Contact Us Form: ${path(['cf_issue_type', 'label'], values)}`;
    data.status = 2;
    data.priority = 1;
    data.description = values.cf_issue_type.label;
    data.custom_fields = {
      cf_order_id: values.order_id,
      cf_issue_type: issueType,
      cf_sub_issue_type: subIssueType,
      cf_sub_sub_issue: subSubIssueType,
      cf_notes: values.message
    };

    if (values.attachment) {
      for (let i = 0; i < values.attachment.length; i++) {
        data.attachments[i] = values.attachment[i];
      }
    }

    try {
      await axios.post(requestURL, data, {
        headers: headers,
      });
      cogoToast.success('Thank you for your message. It has been sent.');
      setSubmitting(false);

      clevertap.event.push("submitFeedback ", {
        platform: "mewebsite",
        timeStamp: new Date().getTime(),
        pageTitle: process.browser ? document.title : "",
        infoMessage: selectedMainOption.label,
        name: values.name,
        email: values.email,
        phone: values.phone,
        orderNumber: values.order_id,
        ...(user && {
          gaUserId: user.id,
        }),
        ...trackingData,
      });
      resetForm();
      setselectedMainOption('');
      setselectedSubOption('');
      setinnerSubOption('');
      setAttachmentsName([]);
      setselectedOrderId('');
    } catch (error) {
      console.log(error);
      cogoToast.error('An error occurred while sending your message! Please try again.');
      setSubmitting(false);
    }
  };

  const SubIssueInput = (firstOptionVal) => {
    let SubOptions = [];
    switch (firstOptionVal) {
      case 'website-related':
        SubOptions = [
          { value: 'webiste-loading-slowly', label: 'Website Loading Slowly' },
          { value: 'offer-related-issue', label: 'Offer Related Issue' },
          { value: 'product-out-of-stock', label: 'Product Out Of Stock' },
          { value: 'how-to-place-and-order', label: 'How to Place an Order' },
        ];
        return SubOptions;
        break;
      case 'order-related':
        SubOptions = [
          { value: 'order-modification', label: 'Order Modification' },
          { value: 'order-cancellation', label: 'Order Cancellation' },
          { value: 'order-status-related', label: 'Order Status Related' },
          { value: 'courier-dispute-feedback', label: 'Courier Dispute/Feedback' },
        ];
        return SubOptions;
        break;
      case 'payment-refund-related':
        SubOptions = [
          { value: 'payment-deducted', label: 'Payment Deducted, Order Not Confirmed' },
          { value: 'wrong-amount-charged', label: 'Wrong Amount Charged' },
          { value: 'cashback-not-recieved', label: 'Cashback Not Received' },
          { value: 'refund-not-recieved', label: 'Refund Not Received' },
          { value: 'payment-deducted-twice', label: 'Payment Deducted Twice' },
          { value: 'payment-not-confirmed', label: 'Payment Not Confirmed' },
          { value: 'wallet-amount-not-refunded', label: 'Wallet Amount Not Refunded' },
        ];
        return SubOptions;
        break;
      case 'product-enquiries-related':
        SubOptions = [
          { value: 'how-to-use-product', label: 'How To Use Product' },
          { value: 'product-indgredients-used', label: 'Product Ingredients Used' },
          { value: 'feed-back', label: 'Feedback' },
        ];
        return SubOptions;
        break;
      case 'return-related':
        SubOptions = [
          { value: 'defective-expired-product-deivered', label: 'Defective/Expired Product Delivered' },
          { value: 'quality-issue', label: 'Quality Issue' },
          { value: 'damaged-product-delivered', label: 'Damaged Product Delivered' },
          { value: 'incomplete-product-delivered', label: 'Incomplete Product Delivered' },
          { value: 'wrongly-ordered', label: 'Wrongly Ordered' },
          { value: 'different-product-delivered', label: 'Different Product Delivered' },
          { value: 'status-of-my-return-request', label: 'Status Of My Return Request' },
        ];
        return SubOptions;
        break;
      case 'marketing-sales-distribution-related':
        SubOptions = [
          { value: 'reseller-commission', label: 'Reseller- Commission' },
          { value: 'reseller-collaboration', label: 'Reseller Collaboration' },
          { value: 'offline-stores-related', label: 'Offline Stores- Related' },
          { value: 'marketing/Adds-campaigning', label: 'Marketing/Adds Campaigning' },
        ];
        return SubOptions;
        break;
    }
  }

  const MainSelectHandler = (selectedValue) => {
    setselectedSubOption('');
    setinnerSubOption('');
    if (selectedValue == null) {
      setselectedMainOption('');
      return;
    }
    setselectedMainOption(selectedValue);
  }

  const OrderIdSelectHandler = (selectedValue) => {
    if (selectedValue == null) {
      setselectedOrderId('');
      return;
    }
    setselectedOrderId(selectedValue)
  }

  const SubSelectHander = (selectedValue) => {
    setinnerSubOption('');
    if (selectedValue == null) {
      setselectedSubOption('');
      return;
    }
    setselectedSubOption(selectedValue);
  }

  const InnerSubSelectHandler = (selectedValue) => {
    if (selectedValue == null) {
      setinnerSubOption('');
      return;
    }
    setinnerSubOption(selectedValue)
  }

  return (
    <Fragment>
      <HeaderContactUs mainHeading="Contact Us" />
      <div className={className}>
        <div className="column-layout">
          <div className="content2 content-border">
            <H1 style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2rem' }}>
              Send Us An Email
            </H1>
            <Formik
              initialValues={{
                name: '', email: '', phone: '', order_id: '', cf_issue_type: '', subIssue: '', innerSubIssue: '', message: ''
              }}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name*</label>
                  <Input
                    type="text"
                    name="name"
                    required
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={errors.name && touched.name && errors.name}
                    className="inp"
                    maxlength="50"
                  />
                  {errors.name && touched.name && <div class="error">{errors.name}</div>}

                  <label htmlFor="email">Email*</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email && errors.email}
                    className="inp"
                  />
                  {errors.email && touched.email && <div class="error">{errors.email}</div>}

                  <label htmlFor="phone">Contact Number*</label>
                  <Input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    required
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    error={errors.phone && touched.phone && errors.phone}
                    className="inp"
                  />
                  {errors.phone && touched.phone && <div class="error">{errors.phone}</div>}

                  <label htmlFor="order_id">Order Id</label>
                  {orderIds && orderIds.length 
                    ?
                      <Field name="order_id">
                        {({ form }) => (
                          <Select
                            styles={colourStyles}
                            id="order_id"
                            isSearchable={false}
                            placeholder={"Select Order Id"}
                            options={orderIds}
                            isClearable={true}
                            value={selectedOrderId}
                            onChange={(selectedOption) => {
                              OrderIdSelectHandler(selectedOption);
                              form.setFieldValue("order_id", selectedOption ? selectedOption.value : null)
                            }}
                          />
                        )}
                      </Field>
                    :
                      <>
                        <Input
                          type="text"
                          inputMode="tel"
                          name="order_id"
                          id="order_id"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.order_id}
                          error={errors.order_id && touched.order_id && errors.order_id}
                          className="inp"
                        />
                        {errors.order_id && touched.order_id && <div class="error">{errors.order_id}</div>}
                      </>
                  }
                  <Gap h="1rem" />
                  <Field name="cf_issue_type">
                    {({ field, form, meta: { touched, error } }) => (
                      <>
                        <label htmlFor="cf_issue_type">Issue Type*</label>
                        <Select
                          className="selectClass"
                          styles={colourStyles}
                          isSearchable={false}
                          {...field}
                          required={true}
                          placeholder={"Select Issue Type*"}
                          options={[
                            { value: 'website-related', label: 'Website Related' },
                            { value: 'order-related', label: 'Order Related' },
                            { value: 'payment-refund-related', label: 'Payment/Refund Related' },
                            { value: 'product-enquiries-related', label: 'Product Enq Related' },
                            { value: 'return-related', label: 'Return Related' },
                            { value: 'marketing-sales-distribution-related', label: 'Marketing/Sales/Distribution Related' },
                          ]}
                          isClearable={true}
                          value={selectedMainOption}
                          onChange={(selectedOption) => {
                            MainSelectHandler(selectedOption);
                            form.setFieldValue("cf_issue_type", selectedOption)
                            form.setFieldValue("subIssue", "")
                            form.setFieldValue("innerSubIssue", "")
                          }}
                        />
                        {(touched && error) && <div class="error">Required</div>}
                      </>
                    )}
                  </Field>
                  {selectedMainOption ?
                    <>
                      <Gap h="1.5rem" />
                      <Field name="subIssue">
                        {({ field, form }) => (
                          <Select
                            isSearchable={false}
                            styles={colourStyles}
                            {...field}
                            isClearable
                            placeholder={"Select Sub-Issue Type"}
                            options={SubIssueInput(selectedMainOption.value)}
                            isClearable={true}
                            value={selectedSubOption}
                            onChange={(selectedOption) => {
                              SubSelectHander(selectedOption)
                              form.setFieldValue("subIssue", selectedOption)
                              form.setFieldValue("innerSubIssue", "")
                            }}
                          />
                        )}
                      </Field>
                    </>
                    : null
                  }
                  {
                    selectedMainOption.value == 'order-related' && selectedSubOption.value && selectedSubOption.value !== "courier-dispute-feedback" ?
                      <>
                        <Gap h="1.5rem" />
                        <Field name="innerSubIssue">
                          {({ field, form }) => (
                            <Select
                              isSearchable={false}
                              styles={colourStyles}
                              {...field}
                              placeholder={"Select Sub-Issue Type"}
                              options={
                                selectedSubOption.value == 'order-modification' ?
                                  [
                                    { value: 'address-change', label: 'Address Change' },
                                    { value: 'product-change', label: 'Product Change' },
                                  ] :
                                  selectedSubOption.value == 'order-cancellation' ?
                                    [
                                      { value: 'better-deal', label: 'Better Deal' },
                                      { value: 'duplicate-ordder', label: 'Duplicate Order Placed' },
                                      { value: 'want-to-change-payment-mode', label: 'Want to change Payment mode' },
                                      { value: 'address-modification', label: 'Address Modification' },
                                      { value: 'delay-in-processing', label: 'Delay in Processing' },
                                      { value: 'coupon-code-not-applied', label: 'Coupon Code not Applied' },
                                      { value: 'changed-my-mind', label: 'Change my Mind' },
                                      { value: 'delay-in-delivery', label: 'Delay in Delivery' }
                                    ] :
                                    selectedSubOption.value == 'order-status-related' ?
                                      [
                                        { value: 'order-delivered-not-received', label: 'Order Delivered- Not Rcvd' },
                                        { value: 'delay-in-delivery', label: 'Delay In Delivery' },
                                        { value: 'want-to-know-the-status', label: 'Want to know the Status' },
                                        { value: 'wrong-address-delivery', label: 'Wrong Address Delivery' },
                                        { value: 'delay-in-processing', label: 'Delay in Processing' },
                                        { value: 'courier-dispute-feedback', label: 'Courier Dispute/Feedback' },
                                      ] : null
                              }
                              isClearable={true}
                              value={values.innerSubIssue}
                              onChange={(selectedOption) => {
                                InnerSubSelectHandler(selectedOption)
                                form.setFieldValue("innerSubIssue", selectedOption)
                              }}
                            />
                          )}
                        </Field>
                      </> 
                      : null
                  }
                  {
                    selectedMainOption.value == 'website-related' && selectedSubOption.value === 'how-to-place-and-order' ?
                      <>
                        <Gap h="1.5rem" />
                        <Field name="innerSubIssue">
                          {({ field, form }) => (
                            <Select
                              isSearchable={false}
                              styles={colourStyles}
                              {...field}
                              placeholder={"Select Sub-Issue Type"}
                              options={
                                [
                                  { value: 'unable-to-use-wallet', label: 'Unable to Use Wallet' },
                                  { value: 'how-to-use-wallet', label: 'How to Use Wallet' },
                                  { value: 'unable-to-use-coupon-code', label: 'Unable to use Coupon code' },
                                  { value: 'unable-to-login', label: 'Unable to Login' },
                                  { value: 'cashback-related-query', label: 'Cashback Related Query' }
                                ]
                              }
                              isClearable={true}
                              value={values.innerSubIssue}
                              onChange={(selectedOption) => {
                                InnerSubSelectHandler(selectedOption)
                                form.setFieldValue("innerSubIssue", selectedOption)
                              }}
                            />
                          )}
                        </Field>
                      </> 
                      : null
                  }
                  {
                    selectedMainOption.value == 'product-enquiries-related' && selectedSubOption.value === 'feed-back' ?
                      <>
                        <Gap h="1.5rem" />
                        <Field name="innerSubIssue">
                          {({ field, form }) => (
                            <Select
                              isSearchable={false}
                              styles={colourStyles}
                              {...field}
                              placeholder={"Select Sub-Issue Type"}
                              options={
                                [
                                  { value: 'packaging-feedback', label: 'Packaging Feedback' },
                                  { value: 'product-feedback', label: 'Product Feedback' },

                                ]
                              }
                              isClearable={true}
                              value={values.innerSubIssue}
                              onChange={(selectedOption) => {
                                InnerSubSelectHandler(selectedOption)
                                form.setFieldValue("innerSubIssue", selectedOption)
                              }}
                            />
                          )}
                        </Field>
                      </> 
                      : null
                  }
                  <Gap h="1.5rem" />
                  <label htmlFor="message" >Write Message</label>
                  <textarea
                    className="textarea"
                    name="message"
                    required={false}
                    onChange={handleChange}
                    value={values.message}
                    error={errors.message && touched.message && errors.message}
                    id="message"
                    cols="40"
                    rows="10"
                  />
                  <Gap h="1.5rem" />
                  <FlexDiv>
                    <Button type="submit"
                      loading={isSubmitting}
                      style={customStyle}
                      disabled={isSubmitting}>Send Email</Button>
                  </FlexDiv>
                </form>
              )}
            </Formik>
          </div>
          <FlexDiv>
            <div style={{ margin: '0rem 2rem 1rem 2rem' }}>
              <FlexDiv>
                <H1 >
                  Contact Details
                </H1>
              </FlexDiv>
              <div className="column-layout">
                <Flex className="content">
                  <img style={{ marginRight: '1rem' }} src='/static/mamaearth/phone.svg' className="mobile-icon" />
                  <p style={{ display: 'inline-block' }}>
                    <span style={{ color: '#333333', fontSize: '0.9rem' }}>
                      <strong>
                        Phone:
                      </strong>
                      +91-8750476476,<br />(Monday - Saturday - 9am to 6pm)
                    </span>
                  </p>
                </Flex>
                <Flex className="content">
                  <img style={{ marginRight: '1rem' }} src='/static/mamaearth/address.svg' className="mobile-icon" />
                  <p style={{ display: 'inline-block' }}>
                    <span style={{ color: '#333333', fontSize: '0.9rem' }}>
                      <strong>
                        Address:
                      </strong>
                      Plot No.63, 4th Floor,<br /> Sector-44, Gurgaon, Haryana
                    </span>
                  </p>
                </Flex >
              </div>
              <div style={{ margin: '1rem' }}>
                <H1 style={{ display: 'flex', justifyContent: 'center' }}>
                  Follow Us On Social Networks
                </H1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <a href="https://www.facebook.com/thedermaco/" target="_blank" rel="nofollow">
                    <Icon icon={facebookF} className="icon facebook-icon" />
                  </a>
                  <a href="https://twitter.com/thedermaco/?lang=en" target="_blank" rel="nofollow">
                    <Icon icon={twitter} className="icon twitter-icon" />
                  </a>
                  <a href="https://www.instagram.com/thedermacoindia" target="_blank" rel="nofollow">
                    <Icon icon={instagram} className="icon instagram-icon" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCak8KQ1SJXPx7bHIINsWFEA" target="_blank" rel="nofollow">
                    <Icon icon={youtube} className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </FlexDiv>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <a style={{ color: theme.general.primaryColor, paddingLeft: '1rem' }} href="/">Home</a>
        {' > '}
        <span style={{ color: '#8A8C8B' }}>Contact Us</span>
      </div>
    </Fragment >
  );
}

export default styled(ContactUsPage)`
.css-151xaom-placeholder {
  margin-left: -8px;
  color: hsl(0deg 0% 75%);
}
.textarea{
  height: 3rem;
  border: none;
  border-bottom: 2px solid rgba(129,129,129,.2);
}
.error {
  font-size: 12px;
  color: rgb(244, 67, 54);
  margin-bottom: 5px;
}
.inp{
  margin-bottom: 1rem;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 25px;
  border: none;
  border-bottom: 2px solid rgba(129,129,129,.2);
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  vertical-align: middle;
  font-size: 14px;
  transition: border-color .5s ease;
}
.attachment_label {
  width: 100%;
  padding: 12px 20px;
  font-size: 13px;
  line-height: 18px;
  background-color: #F1FBFF;
  color: ${theme.general.primaryColor};
  position: relative;
  display: inline-block;
  outline: none;
  border: 0.15rem dotted ${theme.general.primaryColor};
  border-radius: 5px;
  box-shadow: none;
  vertical-align: middle;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: none;
  -webkit-letter-spacing: .3px;
  -moz-letter-spacing: .3px;
  -ms-letter-spacing: .3px;
  letter-spacing: .3px;
  font-weight: 600;
}
.attachment_input {
  display: none;
}
.StaticPageHeader {
  margin: 0;
}
textarea {
  max-width: 100%;
  width: 100%;
  height: 42px;
  border: 2px solid rgba(129,129,129,.2);
  border-radius: 0;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  vertical-align: middle;
  font-size: 14px;
  transition: border-color .5s ease;
}
button {
  padding: 12px 20px;
  font-size: 13px;
  line-height: 18px;
  background-color: #f3f3f3;
  color: #3e3e3e;
  position: relative;
  display: inline-block;
  outline: none;
  border-width: 0;
  border-style: solid;
  border-color: transparent;
  border-radius: 0;
  box-shadow: none;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: none;
  letter-spacing: .3px;
  font-weight: 600;
  transition: all 0.3s;
}
button:hover,
button:active {
  background-color: ${theme.colors.lightGray}
}
button:disabled,
button[disabled]{
  cursor: not-allowed;
}
.mobile-icon svg {
  height: 5rem;
  margin-bottom: 1.5rem;
  width: 3rem;
  color: #bcb1b1;
}
  H1 {
    font-size:1.35rem;
  }
.content {
  flex: 1;
}
.content2 {
  flex: 1;
}
.layout {
  margin-left: 1rem;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.text {
  margin-bottom: 0;
}
.icon {
  background: #CB2027;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  height: 42px;
  line-height: 30px;
  margin: auto 3px;
  width: 42px;
  line-height: 30px;
  margin: auto 3px;
  font-size: 2px;
  text-align: center;
}
.icon svg {
  height: 1.8rem;
  width: 3rem;
  margin-top: 0.6rem;
  align-items: center;
}
.facebook-icon {
  background: #4267b2;
}
.instagram-icon {
  background: #774430;
}
.instagram-icon svg {
  height: 1.8rem;
  width: 3rem;
  margin-top: 0.6rem;
  align-items: center;
}
.twitter-icon {
  background: #33CCFF;
}
.mail-icon {
  background: #F89A1E;
}
.link-text {
  color: #40a8de;
}
.border {
  height: 0.1rem;
  width: 30%;
  margin: 1.2rem;
  text-align: center;
  background: #e6e6e6;
}
.extra-width {
  width: 50%;
}
.content-border {
  border-right: 1px solid #e6e6e6;
}
form {
  margin: 0rem 1rem;
}
@media(min-width: 900px) {
  .column-layout {
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 768px) {
  .extra-width {
    width: 40%;
  }
  .mobile-border {
    display: none;
  }
}
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
