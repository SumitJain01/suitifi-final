import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { buttonStyles } from 'shared/components/styles';
import { darken } from 'polished';
import MESpinner from 'shared/components/Spinner/MESpinner';
import detectMobile from 'utils/helpers/mobileDetect';

const defaultButtonCSS = css`
  background-color: ${({ theme, bg }) => bg || theme.general.primaryColor};
  display: block;
  color: ${({ theme, color }) => color || theme.buttons.color}; 
  border-radius: ${({ theme }) => theme.buttons.radius || 0};
  letter-spacing: 2px;
  text-align: center;
  font-size: 12px;
  padding: 0.8rem 0.75rem;
  font-size: 0.75rem;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  ${({ center }) => (center ? 'margin: 0 auto' : '')};
  ${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
`;

export const MinimalButton = styled.button`
  background: transparent;
  transition: all 0.2s ease-in-out;

  &:hover, &:active {
    color: #fff;
    background: ${({ theme, background }) => background || theme.buttons.bg};
  }

  &:disabled {
    cursor: not-allowed;
    cursor: not-allowed;
    background-color: #d2d2d2;
  }
`;

const Styled = styled(MinimalButton)`
  ${buttonStyles || defaultButtonCSS}
  ${({ theme, loading }) => loading ? `background-color: ${darken(0.3, theme.buttons.bg)}!important;` : ''};
`;

const CenteredDiv =  styled.div`
  color: ${({ theme }) => theme.general.primaryColor};
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`;

const Button = ({ loading, children, ...props }) => {
  const isMobile = detectMobile();

  return (
    <Styled {...props}>
      { 
        loading 
        ? isMobile
          ? 
            <CenteredDiv>
              <MESpinner /> 
              <span style={{ marginLeft: '5px' }}>Adding...</span>
            </CenteredDiv>
          : 
            <CenteredDiv>
              <MESpinner /> 
              <span style={{ marginLeft: '5px' }}>Adding...</span>
            </CenteredDiv>
        : children
      }
    </Styled>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  center: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

// Button.defaultProps = {
//   fullWidth: false,
//   center: false,
//   bg: '#141617',
//   color: '#fff'
// };

export default Button;
