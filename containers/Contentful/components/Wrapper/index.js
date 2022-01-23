import styled from 'styled-components';

export default styled.div`
  /* padding: 0 8%; */
  ::before {
    
    content: '';
    width: 5.7vw;
    height: 100%;
    position: absolute;
    top: 4%;
    left: 0px;
    background-image: url('https://mamaearthp.imgix.net/wysiwyg/left_sparks_mobile2x.png?auto=format');
    background-repeat: no-repeat;
    z-index:-1;
  }
  ::after {
    content: '';
    width: 5.7vw;
    height: 100%;
    position: absolute;
    top: 4%;
    right: 0px;
    background-image: url('https://mamaearthp.imgix.net/wysiwyg/left_sparks_mobile2x.png?auto=format');
    background-repeat: no-repeat;
    transform: scaleX(-1);  
    z-index:-1;
  }
  .title{
    background-color:#fff;
  }
  .uniquewhite{
    background-color:#fff;
  }
`;
