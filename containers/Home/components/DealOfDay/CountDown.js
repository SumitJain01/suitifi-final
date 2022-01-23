/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import styled from 'styled-components';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    diff = diff + 86400 - 19800;
    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className={this.props.className}>
        <div className="CountDown-Wrapper">
          <span className="Countdown-col">
            <span className="CountDown-Item">
              <span className="CountDown-Number">{this.addLeadingZeros(countDown.hours)}</span>
              <span>HR</span>
            </span>
          </span>


          <span className="Countdown-col">
            <span className="CountDown-Item">
              <span className="CountDown-Number">{this.addLeadingZeros(countDown.min)}</span>
              <span>MIN</span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="CountDown-Item">
              <span className="CountDown-Number">{this.addLeadingZeros(countDown.sec)}</span>
              <span>SC</span>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default styled(Countdown)`

  .CountDown-Wrapper {
    padding: 0.5rem;
    color : #279989;
    .CountDown-Item {
      display: inline-block;
      text-align: center;
      padding: 0.5rem 1.0rem;
      box-shadow: 0 0 3px rgba(0,0,0,.1);
      margin: 5px;
      background : white;
      border-radius : 3px;
      span {
        display: block;
      }
    }

    .CountDown-Number {
        font-size: ${({ theme }) => theme.text.h1.fontSize};
        line-height: ${({ theme }) => theme.text.h1.lineHeight};
    }

  }

  @media only screen and (min-width:767px) {
  .CountDown-Wrapper {
    padding: 1rem;
    
    .CountDown-Item {
      display: inline-block;
      text-align: center;
      padding: 0.5rem 1.5rem;
      box-shadow: 0 0 3px rgba(0,0,0,.1);
      margin: 5px;

      span {
        display: block;
      }
    }

    .CountDown-Number {
      font-size: ${({ theme }) => theme.text.h1.fontSize};
      line-height: ${({ theme }) => theme.text.h1.lineHeight};
    }
  }
}
`;
