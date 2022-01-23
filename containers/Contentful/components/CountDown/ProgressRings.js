import React, { Component } from 'react';
import styled from 'styled-components';
import ProgressRing from './ProgressRing';

class ProgressRings extends Component {
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
      const date = this.calculateCountdown(this.props.endTime, this.props.startTime);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endTime, startTime) {
    let diff = (endTime - Date.parse(new Date())) / 1000;

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
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff.toFixed(0);

    return timeLeft;
  }

  stop() {
    this.props.setOfferExpired(true);
    this.setState({ sec: 0 });
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
    const { className } = this.props;
    const {
      days,
      hours,
      min,
      sec,
    } = this.state;
    return (
      <div className={className}>
        <CustomProgressRing className="days" progress={(days / 2) * 100} title={this.addLeadingZeros(days)} subtitle={days === 1 ? 'DAY' : 'DAYS'} />
        <CustomProgressRing className="hours" progress={(hours / 24 * 100)} title={this.addLeadingZeros(hours)} subtitle="Hr" />
        <CustomProgressRing className="minutes" progress={(min / 60) * 100} title={this.addLeadingZeros(min)} subtitle="Min" />
        <CustomProgressRing className="seconds" progress={(sec / 60) * 100} title={this.addLeadingZeros(sec)} subtitle="Sec" />
      </div>
    );
  }
}

const CustomProgressRing = ({ progress, title, subtitle, className }) => {
  return (
    <ProgressRing
      className={className}
      progress={progress || 0}
      strokeWidth={6}
      ballStrokeWidth={18}
      reduction={0.0}
      background="#EAEAEA"
      gradient={[{ stop: 0.0, color: '#279989' }]}
      title={title}
      subtitle={subtitle}
      circular
      size={100}
      style={{margin: "0rem 0.2rem"}}
    />
  );
};

export default styled(ProgressRings)`
  --size: 5.5rem;
  --titleSize: calc(var(--size) - 1rem);
     display: flex;
     justify-content: center;
  .subtitle{
    transform: translateY(1.5rem);
  }
  svg.progress-ring-svg {
    width: var(--size);
    height: var(--size);

    .title {
      font-size: var(--titleSize);
    }
    .subtitle {
      font-size: calc(var(--size) - 2rem);
      margin-top: 0.4rem;

    }
  }
//   @media only screen and (max-width: 290px) and (min-width:278px){
//     svg.progress-ring-svg {
//     width: 50px;
//     height: 50px;
//     margin-top: -16px;
// }
// }
//   @media only screen and (max-width: 360px) {
//       --size: 45px;
//       --titleSize: calc(var(--size) - 15px);
//        padding-top:7px !important;
//     }
//     @media (max-width: 480px) {
//       --titleSize: calc(var(--size) - 8px);

//       svg.progress-ring-svg {

//         .title {
//           font-size: calc(var(--titleSize) + 22px);
//           font-weight: 500;
//         }
//         .subtitle {
//           font-size: calc(var(--size) - (15px));
//           text-transform: uppercase;
          
//         }
//       }
//     }
//     @media only screen and (max-width: 760px) {
//       --size: 50px;
//       --titleSize: calc(var(--size) - 15px);
//        padding-top:7px;
//     }
//     @media only screen and (min-width: 834px)  and (max-width :900px) {
//       --size: 70px;
//       --titleSize: calc(var(--size) - 15px);
//        padding-top:0px;
//     }
`;
