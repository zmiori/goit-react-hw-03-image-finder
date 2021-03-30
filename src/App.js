import { Component, Fragment } from 'react';
import './App.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './services/api';
import Button from './components/Button';
import Loader from './components/Loader';
// import Modal from './components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    console.log('Fetching');
    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .then(() => {
        currentPage > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = searchQuery => {
    this.setState(prevState => {
      return {
        searchQuery: searchQuery,
        currentPage: 1,
        images: [],
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;
    const shouldRenderLoadMoreButton = this.state.images.length > 0;

    return (
      <Fragment>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onClick={this.toggleModal} />
        {isLoading && <Loader />}
        {shouldRenderLoadMoreButton && <Button loadMore={this.fetchImages} />}
      </Fragment>
    );
  }
}

export default App;
