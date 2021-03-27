import { Component, Fragment } from 'react';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';

// import { fetchImages } from './services/api';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './services/api';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    fetchImages(options).then(images => {
      this.setState(prevState => ({
        images: [...images],
      }));
    });
  };

  onChangeQuery = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
    });
  };

  render() {
    return (
      <Fragment>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
      </Fragment>
    );
  }
}

export default App;
