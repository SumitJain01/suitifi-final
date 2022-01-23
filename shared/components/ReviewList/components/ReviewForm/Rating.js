import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

export default class Rating extends Component {
  state = {
    rating: 5,
  }

  changeRating = (rating) => {
    this.setState({
      rating,
    }, () => this.props.update('ratingValue', this.state.rating));
  }

  render() {
    return (
      <Ratings
        style={{ margin: '2rem' }}
        rating={this.state.rating}
        changeRating={this.changeRating}
        widgetDimensions="20px"
        widgetSpacings="5px"
        widgetRatedColors="#eabe12"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    );
  }
}
