import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import CollapsingItem from './AccordionItem';

function Accordion({ data }) {
  const [open, setOpen] = useState(-1);
  return (
    <div>
      {data.map((item, i) => (
        <Fragment key={item.title}>
          {item.content ? (
            <CollapsingItem
              i={i}
              open={open}
              onPointerDown={itemId =>
                open === itemId ? setOpen(false) : setOpen(itemId)
              }
              {...item}
            />
          ) : (
            <div>{item.content}</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default styled(Accordion)`
  display: block;
  text-align: left;
`;
