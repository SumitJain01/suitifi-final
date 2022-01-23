import styled from 'styled-components';

export default styled.div`
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
input[type="number"] {
   -moz-appearance: textfield;
}

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
.login-start{
  font-size:1.4rem;
  color:#279989;
  margin-top:2rem;
  
}
.login-start-mobile{
  font-size:1.6rem;
  color:#279989; 
  font-weight:500;
}

.flex{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top:1rem;
}
.login-intro{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top:4vh;
  width: 85%;
  span{
    letter-spacing:0.4px;
    margin-left:15px;
    text-align:left;
    font-weight:500;
    font-size:13px;
    color:#707070;
    opacity:95%;
  }
  
}
.conditions{
  letter-spacing: 0.8px;
  font-size:12px;
  a{
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
  height:3rem;
  border-width:2px;
  border-radius:3px;
  color:#000000BC;
  @media only screen and (max-width:767px){
    height:4rem;
  }
}
.mobile-paragraph{
  text-align:center;

}
.close-icon{
  position:absolute;
  top:10px;
  right:10px;
  cursor: pointer;

}
.close-icon-mobile{
  position:absolute;
  left:15px;

}

.Wrapper-sc-18jkdhg-0{
  position:relative;
  span{
    font-size: 11px;
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
