import styled from 'styled-components';

export default styled.h1`
  font-size: ${({ theme, textSize }) => textSize || theme.text.h1.fontSize || '1.4rem'};
  line-height: ${({ theme, lineHeightSize }) => lineHeightSize || theme.text.h1.lineHeight || '1.8rem'};
  font-weight: 600;
  color: ${({ theme }) => theme.text.dark};
`;
