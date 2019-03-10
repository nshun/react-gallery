import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import Image from "./Image";
import ImageDetail from "./ImageDetail";

let loading = false;

export default class List extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      limit: 20,
      offset: 0,
      images: [],
      clickedImageId: urlParams.get("id") || "",
    };
    this.listImagesApi = this.listImagesApi.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
  }

  listImagesApi() {
    if (loading) return;
    loading = true;
    fetch(
      `https://wfc-2019.firebaseapp.com/images?limit=${
        this.state.limit
      }&offset=${this.state.offset}`,
      {
        method: "GET",
      }
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.ok) {
          const images = json.data.images;
          this.setState({
            offset: this.state.offset + this.state.limit,
            images: this.state.images.concat(images),
          });
          loading = false;
        } else {
          setInterval(this.listImagesApi, 1000);
        }
      });
  }

  toggleImage(id) {
    if (window.history.pushState) {
      let newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      if (this.state.clickedImageId !== id) {
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
    this.setState({
      clickedImageId: this.state.clickedImageId === id ? "" : id,
    });
  }

  componentWillMount() {
    this.listImagesApi();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = evt => {
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById("footer").getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    if (offset < window.scrollY + 2 * window.innerHeight) {
      this.listImagesApi();
    }
  };

  render() {
    const images = this.state.images;
    if (0 === images.length) {
      return <h1> Loading... </h1>;
    } else {
      const detailImageId = this.state.clickedImageId;
      const listImages = images.map((image, i) => {
        if (image.id === detailImageId) {
          return (
            <ImageDetail
              key={i + "_d"}
              detail={image}
              click={this.toggleImage}
            />
          );
        } else {
          return (
            <LazyLoad height="25vmin" once offset={100}>
              <Image key={i} detail={image} click={this.toggleImage} />{" "}
            </LazyLoad>
          );
        }
      });
      return listImages;
    }
  }
}
