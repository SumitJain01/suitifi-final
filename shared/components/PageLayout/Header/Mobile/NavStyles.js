import styled from 'styled-components';
import MainText from '../../styled/MainText';
import SubText from '../../styled/SubText';
import MobileNavCategory from '../../styled/MobileNavCategory';
import NavigateNext from '../../styled/NavigateNext';

export const StyledNavItem = styled(MobileNavCategory)`
  margin-top: 0.75rem;
  grid-template-columns: 18px 1fr 1fr;
  white-space: nowrap;
  
  &.isCurrent ${SubText} {
    color: ${({ theme }) => theme.general.primaryColor};
  }

  i.category-icon {
    justify-self: center;
  }

  .preview-content {
    font-size: 1.2rem;
    line-height: 0.9em;
    color: #6DA523;
  }
`;

export const StyledCategory = styled(MobileNavCategory)`
  &.isCurrent ${MainText} {
    color: ${({ theme }) => theme.general.primaryColor};
  }
  i.category-icon {
    justify-self: center;
    line-height: 1rem;
    
    svg {
      vertical-align: baseline;
      
      .path-selector {
        color: ${({ theme }) => theme.colors.themePlaceholderGray};
      }
    }
  }
`;

export const StyledCategoryWrapper = styled.details`
  &[open] ${StyledCategory} ${NavigateNext} {
    transform: translateX(1px) rotate(90deg);
  }

  .nav-items {
    margin-left: calc(18px + 0.75rem);
  }
`;

export const Section = styled.div`
  padding: 1rem 0.75rem;
  border-bottom: 1px solid #dbdbdb75;

  & summary {
    list-style-type: none;
    :focus {
      outline: 0px;
    }
    ::-webkit-details-marker {
      display: none;
    }
  }

  &[open] ${StyledCategoryWrapper} ${NavigateNext} {
    transform: rotate(90deg);
  }
`;

export const HelpSection = styled.div`
  background: ${({ theme }) => theme.general.primaryColor};
  color: #ffffff; 
  padding: 1rem 0.75rem;

  .section-name {
    margin-left: 5px;
  }
`;
