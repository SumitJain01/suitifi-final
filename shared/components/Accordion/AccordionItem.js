import React, { Fragment ,useState, useEffect} from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import DownArrowIconv from "../SVGIcons/faqDownArrow";
import UpArrowIcon from "../SVGIcons/faqUpArrow";

function CollapsingItem({
  open, i, title, content, onPointerDown
}) {

  return (
    <Fragment>
      <Wrapper>
        <div className="title" onPointerDown={() => onPointerDown(i)} style={{border:"2px solid #DEF5F4"}}>
          <Flex justify="space-between" >
            <div className={open === i ? "titleNameWithColor" : "titleName"} > {title} </div>
            <div className="titleIcon" > {open === i ? <UpArrowIcon /> : <DownArrowIconv />} </div>
          </Flex>
          <Content className="content" pose={open === i ? 'open' : 'closed'} isOpen={open === i} > {content}
          </Content>
        </div>
      </Wrapper>
    </Fragment>
  );
}
export default CollapsingItem;

const Wrapper = styled.div`
  user-select: none;
  color: ${({ theme }) => theme.colors.darkGray};
    text-align: left;
  .title {
    padding: 10px 5px 8px 10px;
    @media only screen and (max-width: 700px){
      padding:10px;
    }
    margin-bottom:1rem;
    border-radius: 0.2rem;
    opacity: 1;
    color:#1D1D1D;
  .titleName {
    max-width: 95%;
    width: 100%;
    display: inline-block;
  }
  .titleNameWithColor{
    max-width: 95%;
    width: 100%;
    display: inline-block;
    color:#279989;
  }
  .titleIcon {
    max-width: 4%;
    width: 100%;
    display: inline-block;
  }
  }
`;

const ContentPose = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
});

const Content = styled(ContentPose)`
  overflow: hidden;
  padding:${({ isOpen }) => isOpen ? '0rem 0.5rem 0.5rem 0.5rem' : 0};
  margin: ${({ isOpen }) => isOpen ? '0.5rem 0 0 0.5rem' : 0};
  border-left: ${({ isOpen }) => isOpen ? '0.2rem solid #279989' : 0};
`;
