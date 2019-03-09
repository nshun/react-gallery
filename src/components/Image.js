import React, { Component } from 'react';
import brokenImage from '../broken-link.svg';

export default class Image extends Component {
  render() {
    const {
      url,
      description,
      title
    } = this.props.detail;
    return (
      <img
        className="list-image"
        alt={description || ""}
        title={title || ""}
        src={url || brokenImage}
      />);
  }
}