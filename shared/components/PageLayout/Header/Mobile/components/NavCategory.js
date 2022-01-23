import React from 'react';
import styled from 'styled-components';
import { StyledCategory } from '../NavStyles';
import MainText from '../../../styled/MainText';
import NavigateNext from '../../../styled/NavigateNext';

const NavCategory = React.forwardRef((props, ref) => {
  const { data, close, asLink, className, ...rest } = props;
  return (
    <StyledCategory
      as={asLink ? 'a' : undefined}
      className={`category ${className || ''}`}
      onClick={close ? close : null}
      {...rest}
      {...ref}
    >
      <i className="category-icon">{data.icon}</i>
      <MainText>{data.name}</MainText>
      <NavigateNext />
    </StyledCategory>
  );
});

export default styled(NavCategory)``;
