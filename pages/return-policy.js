import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function ReturnPolicy() {
    return (
        <OuterDiv>
            {data}
        </OuterDiv>
    );
}

const OuterDiv = styled.div`
@media only screen and (max-width: 767px){
  padding: 0px 10px;
}
`

const data = (
    <Fragment>
        <div class="return-policy-wrapper">
            <div class="cms_text_top">
                <h1 style={{ borderBottom: "2px solid black" }} align="center"><strong>Return Policy</strong></h1>
            </div>
            <h2 style={{ fontWeight: 600 }}>Shipping</h2>
            <p><strong>What is the cost of shipping?</strong></p>
            <p>A shipping charge of Rs. 40 is applicable to all orders under Rs. 399." As TnC has been updated.</p>
            <p><strong>How long will it take for the order to reach me?</strong></p>
            <p>Please refer to the order details page for estimated shipping and delivery timelines for your orders. From the time of shipping, it takes 5-7 days for orders to reach you.</p>
            <p>If you have placed an order with multiple items, please note that your items may arrive in multiple shipments. The estimated delivery times are indicative, and, on some occasions, there might be some unavoidable delays beyond our control. We will keep you informed in case of any delays.</p>
            <p><strong>What can I do if my order dispatch is delayed?</strong></p>
            <p>We will try our best to get your products to you within the estimated delivery times. If the package has not reached you by the expected delivery date, please write to us at <a style={{ color: "#4bb1ae", fontWeight: 600 }} href="https://thedermaco.com/contact-us" target="_blank" rel="noopener">TheDermaco - Contact</a> and we will try our best to resolve your issues.</p>
            <p><strong>My order has been shipped. Can I track it?</strong></p>
            <p>Once your order has been dispatched, you will receive an email with the details of the tracking number and the courier company that is processing your order.<br />Also, you can go to My Accounts → Orders and track order status from the details page.</p>
            <p>You can track the status of your package 24 hours after your order is dispatched from our warehouse.</p>
            <h3>Returns, Refunds, Cancellations</h3>
            <p><span style={{ fontWeight: 600 }}>Step 1 – </span>Raise a return/replacement request within 7 days from the date of delivery, if you’ve received wrong or expired product(s).<br />Please raise a request here with order and contact details.<br />You can also raise a request with us using the Chat option.<br />In case of damaged/ missing product(s), raise a return/ replacement request within 2 days from the date of delivery.</p>
            <p><span style={{ fontWeight: 600 }}>Step 2 – </span>Give us 2 working days to review your return request.</p>
            <p><span style={{ fontWeight: 600 }}>Step 3 – </span>After reviewing your return request, we will send our courier partner to pick up the products delivered to you.</p>
            <p><span style={{ fontWeight: 600 }}>Step 4 – </span>In case our reverse pick up service is not available at your location, you will need to self-ship the product via any reliable courier partner. We will reimburse the courier charges, either in your PayTM Wallet or Dermapay Wallet.</p>
            <p><span style={{ fontWeight: 600 }}>Step 5 – </span>After your product(s) is received, we will verify it against the claim and initiate the replacement or refund accordingly. Please note that replacement will depend upon the stock availability.</p>
            <p><strong>Under what conditions can I return/ replace my product?</strong></p>
            <ul>
                <li>Wrong product delivered</li>
                <li>Expired product delivered</li>
                <li>Damaged product delivered – Physical damage/tampered product or packaging</li>
                <li>Incomplete order</li>
                <li>Missing products</li>
            </ul>
            <p><strong >Under what conditions return/ replacement requests will not be accepted?</strong></p>
            <ul>
                <li>Opened/used/altered products.</li>
                <li>Original packaging (mono cartons, labels, etc.) missing.</li>
                <li>The return/replacement request is generated after 7 days from the date of delivery.</li>
                <li>The damaged/ missing product is reported after 2 days from the date of delivery.</li>
            </ul>
            <p><strong>How are returns processed?</strong></p>
            <p>Once you request to return a product, a pick up is organised for the item. Our courier partners will come to pick up the item within 5-7 business days after your return request has been received. This item is then brought back to our warehouse where it is checked by our quality control team. Once the product passes the quality control, a refund is initiated.</p>
            <p><strong>Can I cancel my order?</strong></p>
            <p>Please call us on +91 8750-476-476 (Mon - Fri - 9 am to 6 pm), and we will help you in cancelling the order.<br />**Thedermaco reserves the right to cancel any order without pre-confirming the customer at any time and may verify any order before shipping the same to the customer that may include having a verbal or written confirmation from the customer.</p>
            <p><strong>How will I receive the refund for my cancelled or returned product?</strong></p>
            <p>In case of prepaid orders, money will be returned to the bank account/credit/debit card or where the payment was made from within 7 business working days. For Cash on Delivery orders customers will be required to provide bank details where they would like to receive the refund.</p>
            <p><strong>How long does it take to receive a refund for a cancelled order or returned product?</strong></p>
            <p>We will process your refund within 7 business days in case of cancellation of an order.In case of returns, we will refund the money after the product has been received by our warehouse and post completion of quality check. Please note, this entire process takes 2 weeks after the return has been picked up.</p>
            <p><strong>Can I return part of my order?</strong></p>
            <p>Yes. You can return any products that are eligible for returns within 7 days of delivery.</p>
        </div>
    </Fragment>
);
