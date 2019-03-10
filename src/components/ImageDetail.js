import React, { Component } from "react";
import brokenImage from "../broken-link.svg";

export default class Image extends Component {
  onClick() {
    this.props.toggleImage(this.props.id || "");
  }

  render() {
    const detail = this.props.detail;
    if (!detail.url) {
      return <div className="hidden" />;
    } else {
      return (
        <div className="popup">
          <div className="popup-header">
            <h1>{detail.title}</h1>
            <h3>{detail.description}</h3>
          </div>
          <div className="popup-inner">
            <img
              className="detail-image"
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
          </div>
        </div>
      );
    }
  }
}
