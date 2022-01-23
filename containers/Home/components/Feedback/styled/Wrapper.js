import styled from 'styled-components';

export default styled.div`
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 15px;
  min-height: 400px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  }
  figure {
    img {
      border-radius: 50%;
      margin: auto;
    }
  }

  .customerName {
    font-weight: 800;
  }
`;
