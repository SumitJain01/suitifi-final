import React, { Component } from 'react';

export default class ScrollLocker extends Component {
  componentDidMount() {
    document.body.classList.add('noScroll');
  }

  componentWillUnmount() {
    document.body.classList.remove('noScroll');
  }

  render() {
    return <div />;
  }
}
