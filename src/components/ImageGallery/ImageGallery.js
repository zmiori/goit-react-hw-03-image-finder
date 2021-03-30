import { Component, Fragment } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <Fragment>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem image={image} key={image.id}></ImageGalleryItem>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default ImageGallery;
