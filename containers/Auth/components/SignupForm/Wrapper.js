import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
.signup-start{
  font-size:1.3rem;
  color:#279989;
  margin-top:1.5rem;
  @media only screen and (max-width:767px){
    font-size:1.5rem;
    margin-top:1rem 0;
  }
  
}
.e-error{
  .StyledInput-sc-1m95fu4-0{
    border-color:#EC002B !important;
  }

}
.flex1{
  display: flex;
  flex-direction: column;

}
.flex{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top:1rem;
}
.login-intro{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  span{
    font-size:14px;
    color:#707070;
  }
  
}
.conditions{
  font-size:12px;
  margin:2rem 0;
  span{
    color:#279989;
    font-weight:600;
  }
}
.error{
  padding: 0;
  margin-bottom: -20px;
}


.responsive{
  width: 85%;
  @media only screen and (max-width:767px){
    width:90%;
  } 
}
.StyledInput-sc-1m95fu4-0{
  border-width:2px;
  border-radius:3px;
  height:2.7rem;
  @media only screen and (max-width:767px){
    height:3.5rem;
  }

}
.sc-htpNat{
  position:relative;
}
.label{
  font-weight:500 !important;
  padding:0 4px;
  position:relative;
  top:10px;
  left:10px;
  background:white;
  font-size: 0.8rem;
  line-height: 0.8rem;
  opacity:80%;
}
.spinner{
    position:fixed;
    top:50%;
    left:50%;
}
.mappedContact{
    font-size:10px;
    color:#EC002B;
    font-weight:600;
    margin:0.2rem 0 ;
}
.loginWith{
    font-size:14px;
    color:#5CB8B2;
    font-weight:600;
    border-bottom:1px solid #5CB8B2;
}
.close-icon{
    position:absolute;
    top:10px;
    left:10px;
    cursor: pointer;
  }
  @media only screen and (max-width:767px){
    .signup-start{
    margin:0;
    }
    .close-icon{
      top:auto;
      left:15px;
    }
  }
  .Wrapper-sc-5s90n2-0{
    position:relative;
    span{
      font-weight:500 !important;
      color:#00000099 !important;
      padding:0 4px;
      position:absolute;
      top:-5px;
      left:12px;
      background:white;
      opacity:95%;
    }
  }
`;
