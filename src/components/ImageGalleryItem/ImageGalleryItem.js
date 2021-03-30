import { Component } from 'react';
import './ImageGalleryItem.css';
import Modal from '../Modal';
import imagePlaceholder from '../../images/noimage.png';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    const { largeImageURL, webformatURL, tags } = image;

    return (
      <li className="ImageGalleryItem">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
      </li>
    );
  }
}

ImageGalleryItem.defaultProps = {
  image: {
    webformatURL: imagePlaceholder,
    largeImageURL: imagePlaceholder,
  },
};

export default ImageGalleryItem;
