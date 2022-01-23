import { cover } from 'polished';
import React from 'react';
import Flex from 'shared/components/Flex';
import Spinner from 'shared/components/Spinner';
import styled from 'styled-components';


export class LoadingStateWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
        {this.props.loading &&
          <Loader flexDir="column" align="center" justify="center" style={{ width: '100%', minHeight: '1.5rem', zIndex: '0' }}>
            <Spinner margin="1rem" />
          </Loader>
        }
      </Wrapper>
    );
  }
}

export default function withLoader(WrappedComponent, overlay = true, getLoadingStatusFromProps = false) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const isLoading = getLoadingStatusFromProps ? getLoadingStatusFromProps(this.props) : this.props.loading;
      return (
        <Wrapper>
          <WrappedComponent
            {...this.props}
          />
          {overlay && isLoading &&
            <Loader flexDir="column" align="center" justify="center" style={{ width: '100%', minHeight: '1.5rem' }}>
              <Spinner margin="1rem" />
            </Loader>
          }
        </Wrapper>
      );
    }
  };
}

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

const Loader = styled(Flex)`
  ${cover()}
  z-index: 100;
  background: rgba(255, 255, 255, 0.6);
`;
