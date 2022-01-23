import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
`;
