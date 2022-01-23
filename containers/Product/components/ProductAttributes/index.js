import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flex from 'shared/components/Flex';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import DownArrowIconv from 'shared/components/SVGIcons/faqDownArrow';

const ComposedFlex = styled(Flex)`
  margin: 0rem 0;
`;
const Htag = styled.h3`
display:flex;
justify-content: center;
color:#000000!important;
font-size: 20px!important;
margin-bottom: 10px !important;
`;
const attrsNameMap = {
  weight_when_packed: 'Weight',
  dimensions: 'Dimensions',
  best_before: 'Best Before',
  manufactured_by: 'Manufactured By',
  marketed_by: 'Marketed By',
  mrp: 'MRP',
};

export default function ProductAttributes(attrs) {
  
  let filteredAttributes = [];
  attrs.attributes.map((obj, index) => {
    if (obj.attribute_code === "manufactured_by" ||
      obj.attribute_code === "license_no" ||
      obj.attribute_code === "marketed_by" ||
      obj.attribute_code === "best_before") {
      filteredAttributes.push(obj);
    }
  })
  const newFields = [
    { attribute_code: 'Country of origin', value: 'India' },
    { attribute_code: 'Nodal officer detail', value: 'Supratim Sarkar - nodal@mamaearth.in' }
  ];
  newFields.map(obj => filteredAttributes.push(obj));
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemTitle><Htag>ADDITIONAL INFORMATION <DownArrowIconv style={{marginTop:"17px",marginLeft:"10px"}}/></Htag></AccordionItemTitle>
        <AccordionItemBody>
          <ComposedFlex flexDir="row" wrap="wrap">
            {
              filteredAttributes.map((obj, index) => {
                return (
                  <AttrBox name={RemoveUnderscores(obj.attribute_code)} value={obj.value} />
                );
              })
            }
          </ComposedFlex>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );
}

function RemoveUnderscores(str) {
  var newStr = str.replace(/_/g, " ");
  return newStr;
}

function AttributeBox({ className, name, value }) {
  return (
    <div className={className}>
      <h4>{name.toUpperCase()}</h4>
      <sub>{value}</sub>
    </div>
  );
}

const AttrBox = styled(AttributeBox)`
  width: 50%;
  margin-bottom: 1rem;
  h4 {
    margin: 0;
    color: #279989;
  }
`;

AttributeBox.propTypes = {
  value: PropTypes.string,
};
