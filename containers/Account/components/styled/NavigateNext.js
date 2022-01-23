import React from 'react';
import styled from 'styled-components';
import { ic_navigate_next } from 'shared/components/Icons';
import Icon from 'react-icons-kit';

const NavigateNext = ({ className }) => <Icon className={className} icon={ic_navigate_next} size={22} />;

export default styled(NavigateNext)`
  color: ${({ theme }) => theme.general.primaryColor};
`;
