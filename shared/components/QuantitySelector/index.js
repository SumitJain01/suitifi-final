import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { Icon } from 'react-icons-kit';
import { plus, minus } from 'shared/components/Icons';
import PropTypes from 'prop-types';
import { styleProptype } from 'utils/PropTypes';
import { productIncrement }  from 'lib/analytics/datalayer';
import { productDecrement } from 'lib/analytics/datalayer';
import { MAX_PRODUCT_ADD_LIMIT } from 'utils/constants';
class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
  }
  
  componentDidUpdate(pP, pS) {
    const { value } = this.state;
    if (value !== pS.value) {
      this.props.updateQuantity(value);
    }
  }

  decrease = () => {
    const { step } = this.props;
    if (!this.props.isCart) {
      if (this.state.value > 1) {
        this.setState(({ value }) => ({ value: value - step }));
      }
    } 
    else {
      if (this.state.value > 0) {
        this.setState(({ value }) => ({ value: value - step }));
      }
    }
  };

  increase = () => {
    const { step } = this.props;
    this.setState(({ value }) => ({ value: value + step }));
  };

  onClickIncDec = (isIncOrDec) => {
    const { name,isPdp } = this.props;
    if(isIncOrDec === 'decrease'){
      this.decrease();
      isPdp && productDecrement(name, this.state.value);
    } else if(isIncOrDec === 'increase') {
      this.increase();
      isPdp && productIncrement(name, this.state.value);
    }
  }

  render() {
    const { selectProps, updateQuantity } = this.props;
    if (selectProps) {
      if (selectProps.outOfStock) {
        return <div>out of stock</div>;
      }
      return (
        <div className={this.props.className}>
          <Select
            instanceId="quantity-pdp"
            className="qtyPdpSelect"
            classNamePrefix="select"
            isSearchable
            styles={customStyles}
            name="currency"
            placeholder="quantity"
            onChange={p => updateQuantity(p.value)}
            {...selectProps}
          />
        </div>
      );
    }
    return (
      <div className={this.props.className} style={this.props.style}>
        <button onClick={() => this.onClickIncDec('decrease')} className="icon-holder">
          <Icon icon={minus} size={20} className="minus-icon" />
        </button>
        <input 
          className="product-amount-label" 
          value={this.props.value || this.state.value} 
          readOnly 
        />
        <button 
          onClick={() => this.onClickIncDec('increase')} 
          className={
            this.props.value === MAX_PRODUCT_ADD_LIMIT 
            ? "icon-back" 
            : "icon-holder"
          }
        >
          <Icon 
            icon={plus} 
            size={20} 
            className={
              this.props.value === MAX_PRODUCT_ADD_LIMIT 
              ? "plus-icon-disabled" 
              : "plus-icon" 
            }
          />
        </button>
      </div>
    );
  }
}

QuantitySelector.propTypes = {
  small: PropTypes.number,
  initialValue: PropTypes.number,
  step: PropTypes.number,
  updateQuantity: PropTypes.func.isRequired,
  selectProps: PropTypes.object,
  style: styleProptype,
};

QuantitySelector.defaultProps = {
  initialValue: 1,
  step: 1,
};

export default styled(QuantitySelector)`
  display: flex;
  align-items: stretch;
  border: 1px solid ${props => props.theme.colors.smoke};
  border-radius: 5px;
  line-height: 1.2em;

  button {
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 12px;
    padding: 0px 4px;
    transition: all 0.3s;
  }
  .icon-back{
    :hover{
      background-color:#989898;
      color:white;
    }
  }
  button:hover,
  button:active {
    background-color: ${props => props.theme.general.primaryColor};
    
    i {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  input {
    padding: 0px;
    margin-top: 1px;
    font-size: ${({ small }) => (small ? 0.8 : 1)}rem;
    background-color: transparent;
    width: 25px;
    text-align: center;
  }
  
  i.minus-icon {
    color: #989898;
  }

  .product-amount-label {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.general.themeFontBlack};
  }

  i.plus-icon {
    color: ${props => props.theme.general.primaryColor};
  }
  i.plus-icon-disabled{
    color: #989898;
    cursor:no-drop;
  }
  
  .qtyPdpSelect {
    width: 100px;
  }
`;
