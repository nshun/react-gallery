import React, { Component } from 'react';
import Image from './Image';
import ImageDetail from './ImageDetail';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      clickedImageId: ""
    };
    this.listImagesApi = this.listImagesApi.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
  }

  listImagesApi() {
    fetch('https://wfc-2019.firebaseapp.com/images?limit=20&offset=', {
      method: 'GET',
    }).then(res => {
      return res.json();
    }).then(json => {
      if (json.ok) {
        const images = json.data.images;
        this.setState({ images: images });
      } else {
        setInterval(this.listImagesApi, 1000);
      }
    });
  }

  toggleImage(id) {
    if (this.state.clickedImageId === id) {
      this.setState({ clickedImageId: "" });
    } else {
      this.setState({ clickedImageId: id });
    }
  }

  componentWillMount() {
    this.listImagesApi();
  }

  handleClickedImage() {
    this.setState("clicked");
  }

  render() {
    const images = this.state.images;
    if (0 === images.length) {
      return <h1> Loading... </h1>
    } else {
      const detailImageId = this.state.clickedImageId;
      const listImages = images.map(
        (image, i) => {
          if (image.id === detailImageId) {
            return <ImageDetail key={i} detail={image} click={this.toggleImage} />
          } else {
            return <Image key={i} detail={image} click={this.toggleImage} />
          }
        }
      );
      return listImages;
    }
  }
}