import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { checkSquare } from 'shared/components/Icons';
import Image from 'shared/components/Image';

function CheckOption({
  className,
  clickHandler,
  checked,
  imgClass,
  imgSrc,
  title,
}) {
  return (
    <button className={`${className} ${checked ? 'checked' : ''}`} onClick={clickHandler}>
      {checked && <Icon className="option-checked-icon" icon={checkSquare} />}
      <Image className={`${imgClass || ''} option-img`} src={imgSrc} />
      <p className="option-title">{title || ''}</p>
    </button>
  );
}

export default styled(CheckOption)`
  width: 100%;
  max-width: 125px;
  height: 80px;
  max-height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: center;
  
  &:hover, &:active {
    background-color: #eeeeee;
  }
  &.checked {
    border: 1px solid ${props => props.theme.general.borderColor2};
  }
  
  .option-checked-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 0px 1px 0;
    color: #6fa432;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  .option-title {
    margin: 0px;
    margin-top: 0.75rem;
    font-family: Roboto, sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.4em;
  }
  
  @media only screen and (min-width: 768px) {
    padding: 1.25rem 0px;
    justify-content: center;
  }
`;
