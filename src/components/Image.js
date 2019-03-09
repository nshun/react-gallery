import React, { Component } from "react";
import brokenImage from "../broken-link.svg";

export default class Image extends Component {
  onClick() {
    this.props.click(this.props.detail.id);
  }

  render() {
    const { url, description, title } = this.props.detail;
    return (
      <img
        className="list-image"
        alt={description || ""}
        title={title || ""}
        src={url || brokenImage}
        onClick={() => this.onClick()}
      />
    );
  }
}
