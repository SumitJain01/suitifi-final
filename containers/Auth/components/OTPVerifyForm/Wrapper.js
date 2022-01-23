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
.otp-start{
  font-size:1.4rem;
  color:#279989;
  margin-top:1.5rem;
  @media only screen and (max-width:767px){
    font-size:1.6rem;
    margin-top:1rem;
  }

}

.otp-text{
  font-size:14px;
  display: flex;
  justify-content:center;
  margin-bottom: 0.5rem;
}

.flex{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top:1rem;
}

.spinner{
  position: fixed;
  top: 50%;
  left: 50%;
}

.error{
  padding: 0;
  margin-bottom: -18px;
}

.sent-to{
  font-size:14px;
  display: flex;
  align-items:center;
  justify-content:center;
}
.pen{
  display: flex;
  align-items:center;
  color:#279989;
  font-weight:600;
  padding-left:5px;
}
.form-fields{
  display: flex;
  align-items:center;
  justify-content:space-between;
}
.field{
  margin:0 1rem;
}
.StyledInput-sc-1m95fu4-0 {
  text-align:center;
  -webkit-appearance: none;
  margin: 0;
}
.caution{
  display: flex;
  justify-content:center;
  text-transform: uppercase;
  margin:1rem 0;
  font-size:10px;
  @media only screen and (max-width:767px){
    margin:2rem 0;
  }
}
.responsive{
  width: 85%;
  @media only screen and (max-width:767px){
    width:90%; 
  } 
}

.digit-group {
  display: flex;
  align-items:center;
 justify-content:space-around;
 margin: 0 4rem;
 @media only screen and (max-width:767px){
  margin: 0 1rem;
 }
	input {
    color:#A5A5A5;
		width: 35px;
		height: 35px;
		border: 1px solid #A5A5A5;
    border-radius:3px;
		line-height: 50px;
		text-align: center;
		font-size: 24px;
		font-weight: 200;
		color: white;
    @media only screen and (max-width:767px){
      width: 53px;
      height: 53px;
    }
		:hover{
      border: 1px solid #279989;
    }
    :focus{
      outline: none;
      box-shadow: 0 0 0 1px #279989;
    }
    
	}

}

.error{
  margin-top:0.5rem;
  text-align:center;
  color:#EC002B;
  font-size:12px;
}
.otp-field{
  color:#1D1D1D !important;
}
.red{
  color:#EC002B !important;
  border-color:#EC002B !important;
   
}
.close-icon{
  position:absolute;
  top:10px;
  left:10px;
  cursor: pointer;
}
@media only screen and (max-width:767px){
  .otp-start{
    margin:0;
  }
  .close-icon{
    top:auto;
    left:15px;
  }
}
`;
