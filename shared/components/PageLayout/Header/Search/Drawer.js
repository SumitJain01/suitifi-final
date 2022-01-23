import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { easingObject } from 'theme';

const DrawerPose = posed.div({
  open: {
    y: '9%',
    staggerChildren: 120,
    ...easingObject,
  },
  closed: {
    y: '-100%',
    staggerChildren: 90,
    ...easingObject,
  },
});

function SearchDrawer({ className, children, pose }) {
  return (
    <DrawerPose pose={pose} className={className}>
      {children}
    </DrawerPose>
  );
}

export default styled(SearchDrawer)`
@media only screen and (max-width: 767px){
  padding:0rem;
}
  position: fixed;
  background: #fff;
  left: 0;
  top: -2rem;
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 100vw;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
  padding: 2rem 0;
  transform: translateY(-100%);
`;