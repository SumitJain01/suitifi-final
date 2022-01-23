import React, { useEffect, useState } from 'react';
import { chunk } from 'lodash';
import Accordion from 'shared/components/Accordion';
import { map } from 'ramda';

export default function Faqs({
  cmsData = [],
}) {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    if (process && process.browser && cmsData.length) {
      const el = document.getElementById('faqs');
      if (el) {
        setFaqData((elementToObject(el)).children);
        el.remove();
      }
    }
  }, [cmsData]);

  return (
    <Accordion data={faqData} />
  );
}

const makeFAQs = map(item => ({ title: item[0], content: item[1] }));

function elementToObject(el, o = {}) {
  o.id = el.id;
  if (el.children.length) {
    const arr = Array.from(el.children);
    // filters incorrect data
    o.children = arr.map(i => elementToObject(i)).filter(i => typeof i[0] === 'string' && typeof i[1] === 'string');
    o.children = makeFAQs(chunk(o.children, 2));
  } else {
    o = el.innerText;
  }
  return o;
}
