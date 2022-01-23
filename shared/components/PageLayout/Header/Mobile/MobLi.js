/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Li = styled.li`
  display: block;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  margin-right: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 2;
  font-weight: 600;
  padding: 12px 1rem;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.general.primaryColor};
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & > div {
    position: relative;
  }
  a {
    width: 100%;
    color: ${({ theme }) => theme.colors.darkGray};
    display: block;

    &.isCurrent {
      font-weight: 800;
      color: ${({ theme }) => theme.general.primaryColor};
    }
  }

  /* &:not(:last-child)::after { */
  &::after {
    position: absolute;
    background: ${({ theme }) => theme.scheme.accent};
    content: '';
    bottom: 0;
    height: 1px;
    width: 98%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

class MobLi extends Component {
  state = {
    open: false,
  }

  render() {
    const { pathname, link, close } = this.props;
    if (link.name == "Mamaspeaks") {
      return (
        <Li>
          <div>
            <a href={link.val} onClick={close} className={`${pathname === link.val ? 'isCurrent' : ''}`}>{link.name}</a>
          </div>
        </Li>
      )
    }
    else {
      return (
        <Li>
          <div>
            {link.val ?
              <Link prefetch={false} href={link.val} passHref>
                <a onClick={close} className={`${pathname === link.val ? 'isCurrent' : ''}`}>{link.name}</a>
              </Link>
              :
              <Link prefetch={false} href={link.val} passHref>
                <a onClick={() => this.setState({ open: !this.state.open })} href="#">{link.name}</a>
              </Link>
            }
          </div>
        </Li>
      );
    }
  }
}

export default MobLi;
