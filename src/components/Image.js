import React, { Component } from "react";
import brokenImage from "../broken-link.svg";

export default class Image extends Component {
  onClick() {
    this.props.click(this.props.detail.id);
  }

  render() {
    const detail = this.props.detail;
    return (
      <img
        className="list-image"
        tabIndex="0"
        alt={detail.description || ""}
        title={detail.title || ""}
        src={detail.url || brokenImage}
        width={detail.width || ""}
        height={detail.height || ""}
        onClick={() => this.onClick()}
        onError={e => {
          e.target.onerror = "";
          e.target.src = brokenImage;
        }}
      />
    );
  }
}
