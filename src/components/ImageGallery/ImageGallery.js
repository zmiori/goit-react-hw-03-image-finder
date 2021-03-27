import { Component } from 'react';
// import { fetchImages } from '../../services/api';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    // console.log(this.props.images);

    return (
      <ul className="ImageGallery">
        {this.props.images.map(image => (
          <ImageGalleryItem image={image} key={image.id}></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
