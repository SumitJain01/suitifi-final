/* globals Image */
import React from 'react';
import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

const Div = styled.div`
  & > div > :last-child {
    left: -10px!important;
  }
  margin-bottom: 2rem;
`;

export class ActiveImage extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    const img = new Image();
    const self = this;
    img.addEventListener('load', function () { //eslint-disable-line
      self.width = this.naturalWidth;
      self.height = this.naturalHeight;
      self.setState({ loaded: true });
    });
    img.src = this.props.image;
  }
  render() {
    return (<Div>
      {/* <Image alt="product" id="activeImage" src={this.props.image} /> */}
      {this.state.loaded && <ReactImageMagnify
        imagePosition="over"
        {...{
          smallImage: {
            alt: '',
            isFluidWidth: true,
            src: this.props.image,
          },
          largeImage: {
            alt: '',
            src: this.props.image,
            width: this.width,
            height: this.height,
          },
        }
      }
      />
    }
    </Div>);
  }
}

export default ActiveImage;
