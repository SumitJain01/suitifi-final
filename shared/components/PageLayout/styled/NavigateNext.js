import React from 'react';
import styled from 'styled-components';
import { ic_navigate_next } from 'shared/components/Icons';
import Icon from 'react-icons-kit';

const NavigateNext = ({ className }) => <Icon className={className} icon={ic_navigate_next} size={20} />;

export default styled(NavigateNext)`
  color: ${(props) => props.isSkinAssessment ? props.theme.colors.white : props.theme.general.primaryColor};
`;
