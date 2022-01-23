import React from 'react';
import Accordion from 'shared/components/Accordion';
import Icon from 'react-icons-kit';
import styled from 'styled-components';
import { plus, minus } from 'shared/components/Icons';

const openIcon = <Icon icon={plus} style={{ color: '#00AFEF' }} />
const closeIcon = <Icon icon={minus} style={{ color: '#92C935' }} />


function FAQ({ FAQData, className }) {

  let que = [];
  let ans = [];
  let data = [];
  for (let val in FAQData) {
    if (val.startsWith('answer')) {
      ans.push(FAQData[val]);
    }
    else if (val.startsWith('question')) {
      que.push(FAQData[val]);
    }
  }

  for (let i = 0; i < que.length; i++) {
    data.push({
      title: que[i],
      content: ans[i],
      OpenIcon: openIcon,
      CloseIcon: closeIcon
    })
  }



  return (
    <div className={className} >
      <div className="faq-heading-container">
        <div className="faq-heading">FAQ's</div>
      </div>
      <Accordion data={data}></Accordion>
    </div>

  )

}

export default styled(FAQ)`
 .faq-heading-container{
    display:flex;
    justify-content:center;
    width:100%;
    text-align:center;
    font-size:2rem;
    font-family: Roboto, sans-serif;
    color: #000000;
    margin-bottom:2rem;
   
  } 
  .faq-heading{
     width: 10rem;
  }
   .faq-heading:after {
        content: "";
        height: 0.15rem;
        background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);
        display: block;
        margin-bottom: 0.1rem;
        margin-top: 0.1rem;
}
`;
