import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { easingObject } from 'theme';

const DrawerPose = posed.div({
  open: {
    x: '0%',
    staggerChildren: 120,
    ...easingObject,
  },
  closed: {
    x: '-100%',
    staggerChildren: 90,
    ...easingObject,
  },
});

function MobileDrawer({ className, children, pose }) {
  return (
    <DrawerPose pose={pose} className={className}>
      {children}
    </DrawerPose>
  );
}

export default styled(MobileDrawer)`
  font-family: Roboto, sans-serif;
  position: fixed;
  background: #fff;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  /* display: flex;
  flex-direction: column;
  width: 76.53vw;
  max-width: 320px;
  height: 100vh;
  transform: translateX(-100%);
  overflow-y: auto; */
  @media (min-width: 1024px) {
    display: none;
  }
`;
