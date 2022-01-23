import React, { Fragment } from 'react';
import Flex from 'shared/components/Flex';
import styled from 'styled-components';

function Disclaimer() {
  return (
    <Fragment>
      <Wrapper>
        <div className="title">
          <Flex>
            <h2 className="titleName">
            Disclaimer
            </h2>
            <div className="border-blue"></div>
            <div className="border-grey"></div>
            <div className="titleName">
              1.<span>In case of any rashes or allergy, please consult a specialist.</span>
            </div>
            <div className="titleName">
              2.<span>All images shown are for illustration purpose only, actual results may vary.</span>
            </div>
            <div className="titleName">
              3.<span>For external use only. Store in a cool & dry place.</span>
            </div>
          </Flex>
        </div>
      </Wrapper>
    </Fragment>
  );
}

const Wrapper = styled.div`
user-select: none;
color: ${({ theme }) => theme.colors.darkGray};
  .title {
    padding: 12px 0;
  color: ${({ theme }) => theme.general.color};
  .titleName {
    max-width: 95%;
    width: 100%;
    display: inline-block;
  }
  }
  h2 {
    color:#000;
    text-align:center;
    margin-left:2.5%;
    margin-bottom:2px;
  }
  .border-grey {
    border: #e8e8e8 solid 2px;
    border-width: 0px 0px 2px 0px;
    width:100%;
    margin-bottom: 20px;
    position: relative;
  }
  .border-blue {
    width:13%;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:-2px;
    border: 2px solid #41a8dd;
    border-width: 0px 0px 2px 0px;
    z-index:1;
  }
  span {
    margin:1%;
  }
`;
export default Disclaimer;
