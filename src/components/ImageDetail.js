import React, { Component } from "react";
import Helmet from "react-helmet";
import { TwitterShareButton, TwitterIcon } from "react-share";
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
          <Helmet
            title="Kasane"
            meta={[
              { name: "twitter:card", content: detail.title },
              { name: "twitter:title", content: "Kasane" },
              { name: "twitter:description", content: detail.description },
              { name: "twitter:image", content: detail.url },
              { property: "og:title", content: "Kasane" },
              { property: "og:type", content: "article" },
              { property: "og:url", content: window.location.href },
              { property: "og:image", content: detail.url },
              { property: "og:description", content: detail.description },
            ]}
          />
          <div className="popup-header">
            <h2>{detail.description}</h2>
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
          <div className="popup-footer">
            <TwitterShareButton
              url={window.location.href}
              title={`${detail.description} "${detail.title}"`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      );
    }
  }
}
