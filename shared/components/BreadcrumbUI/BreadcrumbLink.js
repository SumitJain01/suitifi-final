import styled from 'styled-components';

export default styled.a`
  /* rgb(0, 175, 239); */
    color: ${({ theme }) => theme.general.primaryColor};
    transition: 0.1s;
    text-transform: lowercase;
    text-transform : capitalize;
    &:hover{
      color:#3ca0da;
      opacity:1.5;
      border-bottom: 1px solid ${({ theme }) => theme.general.primaryColor};
    }

`;