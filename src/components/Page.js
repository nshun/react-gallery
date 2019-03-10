import React, { Component } from "react";
import ImageDetail from "./ImageDetail";
import List from "./List";

export default class Page extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      detail: {},
      clickedImageId: urlParams.get("id") || "",
    };
    this.toggleImage = this.toggleImage.bind(this);
    this.getImageApi = this.getImageApi.bind(this);
  }

  getImageApi(id) {
    if (id && id !== "") {
      fetch(`https://wfc-2019.firebaseapp.com/image/${id}`, {
        method: "GET",
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
          if (json.ok) {
            this.setState({
              detail: json.data,
            });
          } else {
            setInterval(this.getImageApi(id), 1000);
          }
        });
    }
  }

  toggleImage(id) {
    this.getImageApi(id);
    if (window.history.pushState) {
      let newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      if (id !== "" && this.state.clickedImageId !== id) {
        newurl += `?id=${id}`;
      }
      window.history.pushState(
        {
          path: newurl,
        },
        "",
        newurl
      );
    }

    if (id === "") {
      this.setState({
        detail: {},
        clickedImageId: "",
      });
    } else {
      this.setState({
        clickedImageId: this.state.clickedImageId === id ? "" : id,
      });
    }
  }

  componentWillMount() {
    this.getImageApi(this.state.clickedImageId);
  }

  render() {
    return (
      <div className="App-body">
        <ImageDetail
          toggleImage={this.toggleImage}
          detail={this.state.detail}
        />
        <List toggleImage={this.toggleImage} />
      </div>
    );
  }
}
