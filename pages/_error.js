import React from 'react';
import { withRouter } from 'next/router';

class Error extends React.Component {
  static getInitialProps({ ctx: err, res }) {
    // eslint-disable-next-line no-nested-ternary
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  componentDidMount() {
    const { router } = this.props;
    router.push('/');
  }
  render() {
    return null;
  }
}

export default withRouter(Error);
