import React from 'react';
import styled from 'styled-components';
import { isNonEmptyArray } from 'ramda-adjunct';
import { Row, Col } from 'react-styled-flexboxgrid';
import ActiveImage from './ActiveImage';
import GalleryThumb from './GalleryThumb';

const Holder = styled.div`
  /* min-height: 75vh; */
`;

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      images: props.images,
    };
  }

  onSelect = (val) => {
    this.setState({ selected: val });
  }

  render() {
    return (<Holder>
      {isNonEmptyArray(this.state.images) &&
        <Row align="center">
          <Col xs={2}>
            <GalleryThumb click={this.onSelect} images={this.state.images} />
          </Col>
          <Col xs={10}>
            <ActiveImage image={this.state.images[this.state.selected]} />
          </Col>
        </Row>
      }
    </Holder>);
  }
}

export default ProductGallery;
