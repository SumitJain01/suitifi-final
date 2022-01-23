import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (<div>
        <img
          alt=""
          onClick={() => this.props.click(this.props.val)}
          src={this.props.src}
          style={{
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
    </div>);
  }
}

export default Image;
