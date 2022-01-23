import React, { Component } from 'react';
import styled from 'styled-components';
import Image from './Image';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px 0 0;

  & div {
    flex: 1;
    margin-bottom: 8px;
  }
`;

class GalleryThumb extends Component {
  render() {
    return (<Gallery id="gallery">
      {
        this.props.images.map((image, num) => {
          return <Image key={num} click={this.props.click} val={num} src={image} />; //eslint-disable-line
        })
      }
    </Gallery>);
  }
}

export default GalleryThumb;
