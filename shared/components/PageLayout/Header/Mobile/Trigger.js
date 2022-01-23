import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import theme, { easingObject } from 'theme/index';
import { Icon } from 'react-icons-kit';
import { arrowLeft, menu } from 'shared/components/Icons';
import { MenuBarIcon } from './SvgIcons';

const PosedHolder = posed.div({
  closed: {
    color: theme.scheme.accent,
    ...easingObject,
  },
  open: {
    color: '#fff',
    zIndex: '12',
    ...easingObject,
  },
});

function Arrow({ open, clickHandler, className }) {
  const pose = open ? 'open' : 'closed';
  return (
    <Holder className={className} pose={pose} onClick={clickHandler}>
      <i>
        <MenuBarIcon />
      </i>
      {/* <Icon icon={open ? arrowLeft : menu} size={22} /> */}
    </Holder>
  );
}

const Holder = styled(PosedHolder)`
  /* width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* z-index: 11; */
  position: relative;
  transition: all 0.3s;
  :active {
    background-color: ${theme.scheme.accent};

    svg {
      color: #fff;
    }
  }
  svg {
    stroke-width: 2.5px;
    color: ${theme.general.primaryColor};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default styled(Arrow)``;
