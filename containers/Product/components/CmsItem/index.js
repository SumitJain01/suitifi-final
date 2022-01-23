import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Accordion from 'shared/components/Accordion';
import Faqs from '../Faqs';

function CmsContent({
  title, content, className, collapse, cmsData, product
}) {
  return (
    <div className={`${className} CMSContent`} >
      {!collapse &&
        <>
          <h2 id={ifFAQ(content) && 'faq_title'}>{title}</h2>
          {ifFAQ(content) && <Faqs cmsData={cmsData} key={product.id} />}
        </>
      }
      {collapse ?
        <Accordion data={[{ title: <h2 style={{ margin: '0', color: '#000', fontSize: '1.5rem' }}>{title}</h2>, content: <div className="html" dangerouslySetInnerHTML={{ __html: content }} /> }]} />
        : <div className="html" dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}

function ifFAQ(content) {
  const faqIndex = content.toLowerCase().indexOf('<div id="faqs">');
  return faqIndex > -1;
}

export default styled(CmsContent)`
  display: block;
  text-align: center;
  @media only screen and (max-width: 700px){
    text-align:center;
    }
  .html .ytVideo{
    text-align:center;
    iframe{
      border-radius:10px;
      height:300px;
      width:430px;
      @media only screen and (max-width: 700px){
      border-radius:10px;
      height:250px;
      width:100%;
      padding: 0px 5px;
      margin-bottom: 10px;
        }
    }
  }
  .html .dermaPatch{
    @media only screen and (max-width: 700px){
      margin-left:5px;
      margin-right:5px;
    }
    margin-top:-15px;
    margin-bottom:-15px;
    .testingSteps{
      margin-left:-25px;
      margin-top:-5px;
    }
  }
  .html .ingredients{
    @media only screen and (max-width: 700px){
      margin-bottom:-25px;
    }
    margin-top:-15px;
    margin-bottom:-15px;
  }
  .html .dermaOpinion{
    @media only screen and (max-width: 700px){
      margin-left:5px;
      margin-right:-15px;
      text-align:left;
      margin-bottom: -15px;
    }
    margin-left:10px;
  }
  .html .suitable{
    margin-bottom:-20px;
    @media only screen and (max-width: 700px){
      margin-bottom:-10px;
      margin-left:5px;
      margin-right:5px;
    }
  }
  .html .use{
    margin-bottom:10px;
    @media only screen and (max-width: 700px){
      margin-bottom:5px;
      margin-left:5px;
      margin-right:5px;
    }
  }
  .html .suitable li{
    @media only screen and (max-width: 700px){
      max-width: 100%;
      margin-right:-20px;
      padding: 10px 10px;
    }
    margin-bottom: 20px;
    max-width: 40%;
    img{
      width:94px;
      @media only screen and (max-width: 700px){
        width:80px;
      }
    }
  }
  .html .use li{
    img {
      max-width: 94px;
    }
    @media only screen and (max-width: 700px){
      max-width: 100%;
      margin-right:0px;
      img {
        max-width: 80px;
      }
    }
    text-align:center !important;
    max-width: 25%;
    margin-right: 30px;
    margin-bottom: 20px;
    background: #DEF5F4;
  }
  .html .use span{
    @media only screen and (max-width: 700px){
      margin-top:-10px;
      margin-left:18px;
    }
    font-size: 1rem;
    font-weight:400;
    color: #000
  }
  .html .suitable li{
    background: #DEF5F4;
  }
  .html .suitable span{
    @media only screen and (max-width: 700px){
      margin-left:-7px;
      text-align:left !important;
      }
    font-size: 1rem;
    font-weight:400;
    color: #000
  }
  
  .html .stories{
    margin-left:5px;
    margin-right:5px;
    margin-bottom: -20px;
    @media only screen and (max-width: 700px){
      margin-bottom:-10px;
      }
  }
  .html .stories li{
    @media only screen and (max-width: 700px){
    width:100%;
    }
    margin-bottom: 20px;
    background: #DEF5F4;
  }
  .html .stories span{
    @media only screen and (max-width: 700px){
      margin-top:0px;
      }
    margin-top:-1px;
    padding-left:10px;
    width: 100%;
    display: block;
    font-size: 1rem;
    font-weight:400;
    color: #000
  }
  .html .activities .list-icon{
    @media only screen and (max-width: 700px){
      align-self: center
      }
  }
  .html .activities span{
    @media only screen and (max-width: 700px){
      max-width:100%;
      text-align:center !important
      }
    font-size: 1rem;
    font-weight:400;
    color: #000
  }
  .html .activities{
    flex-direction:column;
    margin-bottom:10px;
    @media only screen and (max-width: 700px){
      margin-bottom:10px;
      margin-left:-10px;
      padding-left:5px;
      padding-right:5px;
    }
  }
  .html .activities li{
    @media only screen and (max-width: 700px){
      margin-top:-15px;
      display:flex;
      flex-direction:column;
      text-align:center !important
      }
  }
  .html .result-list li img{
    max-width: 250px;
    max-height: auto;
    text-align: center;
    justify-content: center;
    margin-top:-10px;
  }
  .result-img{
    text-align: center;
  }
  .html li{
    border-radius: 10px;
    margin-right: 20px;
  }
  .html h2{
    font-size:1rem;
  }
  > h2 {
      font-size: 1.5rem;
      color: #000;
      display:inline-block;
      text-align:center;
      padding-bottom:10px;
      line-height:1.5rem;
      margin-top:10px;
      margin-bottom: 20px;
      position: relative;

      &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        height: 2px;
        background: rgba(119,119,119,.17);
        width: 1000%;
        left: 0px;
        z-index: 0;
        margin: auto;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        height: 2px;
        background: rgba(119,119,119,.17);
        width: 1000%;
        right: 0px;
        z-index: 0;
        margin: auto;
      }
    }
    table, th,td {
      border: 1px solid #83bfe2;
    }
    table {
      width: 100% !important;
      text-align: left;
      border-collapse: collapse;
      tr {
        height: 3vh;
        
        :nth-child(1) {
          background: #83bfe2 !important;
          font-weight: bold;
          height:4vh;
        }
        
        td{
          padding-left: 5px;
        }
      }
    }

    /* .html {
      .compare-list {
        li {
          .compare-content {
            padding-left: 20px;
            text-align: left;
            ul {
              li {
                position: relative;

                :before {
                  content: '\\2713';
                  display: block;
                  position: absolute;
                  left: -15px;
                  top: 2px;
                  font-weight: 600;
                  font-size: 0.8rem;
                  color: ${({ theme }) => theme.scheme.highlight};
                }
              }
            }
          }
        }
      }
    } */

    .html {
      text-align: left;
      .result-list {
        li {
          flex: 1 1 50%;
          padding: 0.5rem;
        }
      }
      .woodmart-list {
        li {
          flex: 1 1 100%;
          text-align: left;
        }
      }
      .compare-img {
        img {
          max-width: 300px;
          max-height: 300px;
        }
      }
      ul.compare-list 
      {
        li {
          display: block;
          text-align: left;
          
          &:nth-child(1) 
          {
            .compare-img {
              padding-bottom: 10px;

              img {
                border: 2px solid ${({ theme }) => theme.scheme.highlight};
                height: auto;
                width: 100%;
                margin: auto;
              }
            }
            li {
              position: relative;

              :before {
                content: '\\2713';
                display: block;
                position: absolute;
                left: -15px;
                top: 2px;
                font-weight: 600;
                font-size: 0.8rem;
                color: ${({ theme }) => theme.scheme.highlight};
              }
            }
          }
          &:nth-child(2) 
          {
            .compare-img {
              padding-bottom: 10px;

              img {
                border: 2px solid ${({ theme }) => theme.colors.red};
                height: auto;
                width: 100%;
                margin: auto;
              }
            }
            li {
              position: relative;

              :before {
                content: 'x';
                display: block;
                position: absolute;
                left: -15px;
                font-weight: 600;
                font-size: 0.8rem;
                color: ${({ theme }) => theme.colors.red};
              }
            }
          }
        }
      }
    }

@media only screen and (min-width: 767px) {
  
  .html { 
    ul {
      &.compare-list {
        li {
          display: flex;

          .compare-content {
            padding-left: 20px;
          }
        }
      }
    }
    .result-list {
        li {
          flex: 1 1 33%;
          padding: 0.5rem;
        }
      }
      .woodmart-list {
        li {
          flex: 1 1 50%;
          padding: 0.5rem;
        }
      }
  }
    
}
@media only screen and (max-width: 700px) {
  .result-list {
    flex-direction: column;
    li {
      flex: 1 1 33%;
      padding: 0.5rem;
      .result-content {
        padding-top: 0;
      }
    }
    h2{
      display:block;
      height:16%;
    }
  }
}
`;

CmsContent.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  className: PropTypes.string,

};

CmsContent.defaultProps = {
  title: [''],
  content: '',
  className: '',

};
