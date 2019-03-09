import React, { Component } from 'react';
import Image from './Image';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      clicked: ""
    };
    this.listImagesApi = this.listImagesApi.bind(this);
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
      const listImages = images.map(
        (image, i) => <Image key={i} detail={image} />
      );
      return listImages;
    }
  }
}