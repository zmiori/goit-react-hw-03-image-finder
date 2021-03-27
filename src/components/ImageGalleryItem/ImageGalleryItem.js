import { Component } from 'react';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
